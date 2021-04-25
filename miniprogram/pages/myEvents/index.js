// miniprogram/pages/myEvents/index.js
const app = getApp();
Page({
  /**
   * Page initial data
   */
  data: {
    signedUpEvents: [],
    selectedEvent: 0,
    tips: 'Please wait ...',
    loadingData: true,
    animated: true,
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
      loadingData: true,
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
    that.setData({
      loadingData: true,
    });
    const signedUpEventNames = await app.loadUserSignedUpEvents();
    const signedUpEvents = app.globalData.currentEvents.filter(event => signedUpEventNames.includes(event.name));

    that.setData({
      signedUpEvents,
      loadingData: false,
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
    that.setData({
      loadingData: true,
    })

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
        that.setData({
          loadingData: false,
        })
      }
    });
  },

  viewEventDetail: function (e) {
    this.setData({
      selectedEvent: e.currentTarget.dataset.index
    })
  }
})