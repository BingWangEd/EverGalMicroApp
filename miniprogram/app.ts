//app.ts
import * as f from "fp-ts";

const CONFIG = require('./config');

export interface IEvent {
  dateTime: string,
  headsup: string[],
  id: number,
  location: string,
  meetSpot: string,
  name: string,
  imageId: string,
}

// https://fettblog.eu/typescript-hasownproperty/
export const hasOwnProperty = <X extends {}, Y extends PropertyKey>(obj: X, prop: Y): obj is X & Record<Y, unknown> => {
  return obj.hasOwnProperty(prop)
}

export const validateCurrentEventsDataFormat = (data: unknown): f.either.Either<Error, IEvent[]> => {
  if (!Array.isArray(data)) {
    return f.either.left(new Error('Data is not array.'))
  }

  const currentEventKeys = ['dateTime', 'headsup', 'id', 'location', 'meetSpot', 'name'];
  data.forEach((ele) => {
    Object.keys(currentEventKeys).forEach(key => {
      if (!hasOwnProperty(ele, key)) {
        return f.either.left(new Error('Data is not array.'))
      }
    })
  })

  return f.either.right(data as IEvent[]);
};

interface IApp extends IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
    currentEvents?: IEvent[]
    userSignedUpEvents?: IEvent[],
    userOpenId?: string
  },
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
  loadCurrentEvents: () => Promise<IEvent[]>,
  loadUserId: () => Promise<string>,
  loadUserSignedUpEvents: () => Promise<IEvent[]>,
}

App<IApp>({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }
  },
  globalData: {
    currentEvents: undefined,
    userOpenId: undefined,
    userSignedUpEvents: undefined,
  },
  loadCurrentEvents: function () {
    const that = this;
    return new Promise((resolve, reject) => {
      wx.cloud.callFunction({
        name: "getCurrentEvents",
        success: (res: unknown) => {
          const verifyCurrentEventsFromData = (response: unknown) => f.function.pipe(
            response,
            (response): f.either.Either<Error, unknown> => 
              // response.result.data
              response &&
                typeof response === 'object' &&
                hasOwnProperty(response, 'result') &&
                response.result &&
                typeof response.result === 'object' &&
                hasOwnProperty(response.result, 'data') ?
                f.either.right(response.result.data) : f.either.left(new Error('Data does not exist')),
            f.either.chain((data) =>
              validateCurrentEventsDataFormat(data)
            ),
            f.either.fold(
              (error) => reject(error),
              (verifiedCurrentEvents) => {
                that.globalData.currentEvents = verifiedCurrentEvents
                wx.setStorageSync("currentEvents", verifiedCurrentEvents)
                resolve(verifiedCurrentEvents)
              }
            )
          )
          verifyCurrentEventsFromData(res);
        },
        fail: (error) => {
          reject(error);
        }
      })
    });
  },
  loadUserId: function () {
    const that = this;
    return new Promise((resolve, reject) => {
      wx.login({
        success: function (res) {
          if (res.code) {
            wx.request({
              url: 'https://api.weixin.qq.com/sns/jscode2session',
              data:{
                appid: CONFIG.APP_ID,
                secret: CONFIG.SECRETE,
                js_code: res.code,
                grant_type:'authorization_code'
              },
              method:"GET",
              success(res: any) {
                const verifyOpenid = (response: unknown) => {
                  f.function.pipe(
                    response,
                    (response: unknown): f.either.Either<Error, string> =>
                      response && typeof response === 'object' && hasOwnProperty(response, 'data') &&
                      response.data && typeof response.data === 'object' &&  hasOwnProperty(response.data, 'openid') && 
                      response.data.openid && typeof response.data.openid === 'string' ?
                      f.either.right(response.data.openid) : f.either.left(new Error('Open id does not exist on response')),
                    f.either.fold(
                      (error) => reject(error),
                      (verifiedOpenid) => {
                        that.globalData.userOpenId = verifiedOpenid;
                        wx.setStorageSync("userOpenId", verifiedOpenid);
                        resolve(verifiedOpenid);
                      }
                    )
                  )
                }

                verifyOpenid(res);
              },
              fail(err) {
                reject(err)
              }
            })
          } else {
            reject('Received data does not include user code');
          }
        }
      })
    })
  },
  loadUserSignedUpEvents: async function () {
    const that = this;

    /**
     * Make sure currentEvents have been loaded
     */
    let currentEvents = that.globalData.currentEvents;
    if (!currentEvents) {
      currentEvents = await that.loadCurrentEvents();
      that.globalData.currentEvents = currentEvents;
    }

    /**
     * Make sure currentEvents have been loaded
     */
    let userOpenId = that.globalData.userOpenId;
    if (!userOpenId) {
      userOpenId = await that.loadUserId();
      that.globalData.userOpenId = userOpenId;
    }
    
    /**
     * Make sure currentEvents have been loaded
     */
    const eventNames = currentEvents.map((event: IEvent) => event.name);
    return new Promise((resolve, reject) => {
      wx.cloud.callFunction({
        name: "findSignedUpEvents",
        data: {
          userOpenId,
          eventNames,
        },
        success: (res: unknown) => {
          const verifyUserSignedUpEvents = (response: unknown) => 
            f.function.pipe(
              response,
              (response: unknown) =>
                response && typeof response === 'object' && hasOwnProperty(response, 'result') ?
                  f.either.right(response.result) : f.either.left(new Error('Result does not exist')),
              f.either.chain((data: unknown) => f.function.pipe(
                validateCurrentEventsDataFormat(data)
              )),
              f.either.fold(
                (error) => reject(error),
                (verifiedUserSignedUpEvents: IEvent[]) => {
                  that.globalData.userSignedUpEvents = verifiedUserSignedUpEvents;
                  resolve(verifiedUserSignedUpEvents);
                }
              )
            )
            verifyUserSignedUpEvents(res)
        },
        fail: (msg) => {
          reject(msg);
        }
      });
    });
  }
})
