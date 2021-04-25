//app.js
const CONFIG = require('./config');

App({
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
        success: (res) => {
          if (res.result.data) {
            const currentEvents = res.result.data;
            that.globalData.currentEvents = currentEvents;
            wx.setStorageSync("currentEvents", currentEvents);
            resolve(currentEvents);
          } else {
            reject('Received data does not have current events: ', res);
          }
        },
        fail: (err) => {
          reject(err);
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
              success(res) {
                if (res.data.openid) {
                  const userOpenId = res.data.openid;
                  that.globalData.userOpenId = userOpenId;
                  wx.setStorageSync("userOpenId", userOpenId);
                  resolve(userOpenId);
                } else {
                  reject('Received data does not include user open id');
                }
              },
              fail(err) {
                reject('Failed to get openId res: ', err)
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
    const eventNames = currentEvents.map(event => event.name);
    return new Promise((resolve, reject) => {
      wx.cloud.callFunction({
        name: "findSignedUpEvents",
        data: {
          userOpenId,
          eventNames,
        },
        success: (res) => {
          if (res.result) {
            that.globalData.userSignedUpEvents = res.result;
            resolve(res.result);
          } else {
            reject('Cannot find userSignedUpEvents');
          }
        },
        fail: (msg) => {
          reject(msg);
        }
      });
    });
  }
})
