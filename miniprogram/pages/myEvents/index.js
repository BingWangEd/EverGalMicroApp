// miniprogram/pages/myEvents/index.js
const app = getApp();
Page({
  /**
   * Page initial data
   */
  data: {
    eventDetails: [],
    signedUpEvents: [],
    selectedEvent: 0
    // canIUseGetUserProfile: true,
    // title: `${getApp().globalData.eventDetails.name} @ ${getApp().globalData.eventDetails.location}`,
    // meetSpot: getApp().globalData.eventDetails.meetSpot,
    // headsup: getApp().globalData.eventDetails.headsup,
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: async function (options) {
    const that = this;
    /**
     * Set slide bar icons
     */
    that.setData({
      slideButtons: [{
        type: 'warn',
        text: 'cancel reservation',
        src: '/images/cross_pink.png',
      }],
    });

    /**
     * Get user open id
     */
    let userOpenId = app.globalData.userOpenId;
    if (!userOpenId) {
      userOpenId = await app.loadUserId();
    }
    that.setData({
      userOpenId
    })

    /**
     * Get all of current events
     */
    let currentEvents = app.globalData.currentEvents;
    if (!currentEvents) {
      currentEvents = await app.loadCurrentEvents();
    }
    that.setData({
      currentEvents
    })

    /**
     * Get what the user signed up
     */
    that.setData({
      signedUpEvents: [],
    });
    await currentEvents.filter(async (event) => {
      await wx.cloud.callFunction({
        name: "findIfSignedUp",
        data: {
          userOpenId,
          eventName: event.name,
        },
        success: (res) => {
          const dataLength = res.result.data.length;
          if (dataLength > 0) {
            that.setData({
              signedUpEvents: [event, ...that.data.signedUpEvents],
            });
          }
        }
      });
    });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: async function () {
    console.log('onshow')
    const that = this;
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
    /**
     * Get what the user signed up
     */
    const currentEvents = app.globalData.currentEvents;
    that.setData({
      signedUpEvents: [],
    });
    await currentEvents.filter(async (event) => {
      await wx.cloud.callFunction({
        name: "findIfSignedUp",
        data: {
          userOpenId,
          eventName: event.name,
        },
        success: (res) => {
          const dataLength = res.result.data.length;
          if (dataLength > 0) {
            that.setData({
              signedUpEvents: [event, ...that.data.signedUpEvents],
            });
          }
        }
      });
    });
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  slideButtonTap: function (e) {
    const that = this;

    const eventNumber = e.currentTarget.dataset.index;
    const event = that.data.signedUpEvents[eventNumber];
    const userOpenId = app.globalData.userOpenId;

    wx.cloud.callFunction({
      name: "cancelSignup",
      data: {
        userOpenId,
        eventName: event.name,
      },
      success: () => {
        wx.showToast({
          title: 'Canceled!',
          icon: 'success',
          duration: 2000
        });
        that.setData({
          signedUpEvents: that.data.signedUpEvents.filter((ele, i) => i !== eventNumber)
        })
      }
    });
  },

  viewEventDetail: function (e) {
    console.log('viewEventDetail: ', e);
    this.setData({
      selectedEvent: e.currentTarget.dataset.index
    })
  }
})