//app.ts
import * as f from "fp-ts";
import * as t from "io-ts";

const CONFIG = require('./config');

const Event = t.interface({
  dateTime: t.string,
  headsup: t.array(t.string),
  id: t.number, // event id
  location: t.string,
  meetSpot: t.string,
  name: t.string,
  _id: t.string // WeChat adds user id to record in cloud database
})

const Events = t.array(Event);

export type IEvent = t.TypeOf<typeof Event>;
export type IEvents = t.TypeOf<typeof Events>;

interface IApp extends IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
    currentEvents?: IEvent[]
    userSignedUpEvents?: string[],
    userOpenId?: string
  },
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
  loadCurrentEvents: () => Promise<IEvent[]>,
  loadUserId: () => Promise<string>,
  loadUserSignedUpEvents: () => Promise<string[]>,
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
          const Result = t.partial({
            data: Events
          })
          const Response = t.partial({
            result: Result
          })

          f.function.pipe(
            Response.decode(res),
            f.either.fold(
              (error) => reject(error),
              (verifiedResponse) => {
                const verifiedCurrentEvents = verifiedResponse.result?.data;
                if (!verifiedCurrentEvents) {
                  return reject(new Error('Data does not exist'))
                }
                that.globalData.currentEvents = verifiedCurrentEvents
                wx.setStorageSync("currentEvents", verifiedCurrentEvents)
                resolve(verifiedCurrentEvents)
              }
            )
          )
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
                // response.data.openid
                const openid = t.partial({
                  openid: t.string
                })
                const Response = t.partial({
                  data: openid
                })
                f.function.pipe(
                  Response.decode(res),
                  f.either.fold(
                    (error) => reject(error),
                    (verifiedResponse) => {
                      const verifiedOpenid = verifiedResponse.data?.openid;
                      if (!verifiedOpenid) {
                        return reject('verifiedOpenid is undefined');
                      }
                      that.globalData.userOpenId = verifiedOpenid;
                      wx.setStorageSync("userOpenId", verifiedOpenid);
                      resolve(verifiedOpenid);
                    }
                  )
                )
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
          // response.result
          const Response = t.partial({
            result: t.array(t.string)
          })
          f.function.pipe(
            Response.decode(res),
            f.either.fold(
              (error) => reject(error),
              (verifiedResponse) => {
                const verifiedUserSignedUpEventNames = verifiedResponse.result;
                if (!verifiedUserSignedUpEventNames) {
                  return reject('UserSignedUpEvents does not exist.')
                }
                that.globalData.userSignedUpEvents = verifiedUserSignedUpEventNames;
                resolve(verifiedUserSignedUpEventNames);
              }
            )
          )
        },
        fail: (msg) => {
          reject(msg);
        }
      });
    });
  }
})
