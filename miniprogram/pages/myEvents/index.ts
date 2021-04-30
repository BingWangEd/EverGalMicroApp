// miniprogram/pages/myEvents/index.ts

interface IMyEvents extends IAppOption {
  
}

const myEventsApp = getApp();

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
  onLoad: async function () {
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
    const signedUpEventNames = await myEventsApp.loadUserSignedUpEvents();
    const signedUpEvents = myEventsApp.globalData.currentEvents.filter((event: IEvent) => signedUpEventNames.includes(event.name));

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
  // onShareAppMessage: function () {

  // },

  // Use any as type for now; as official typing does not include event type yet
  slideButtonTap: function (e: any) {
    const that = this;
    that.setData({
      loadingData: true,
    })

    const eventNumber = e.currentTarget.dataset.index;
    const event = that.data.signedUpEvents[eventNumber] as IEvent;
    const userOpenId = myEventsApp.globalData.userOpenId;

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
          signedUpEvents: that.data.signedUpEvents.filter((_, i) => i !== eventNumber)
        })
        that.setData({
          loadingData: false,
        })
      }
    });
  },

  // Use any as type for now; as official typing does not include event type yet
  viewEventDetail: function (e: any) {
    this.setData({
      selectedEvent: e.currentTarget.dataset.index
    })
  }
})