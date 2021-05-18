// pages/currentEvents/index.js

import { IEvent } from "../../app";

const currentEventsApp = getApp();

interface currentEventsPageData {
  loadingData: boolean,
  currentEvents?: IEvent[]
}

Page({

    /**
     * Page initial data
     */
    data: {
      loadingData: true,
    } as currentEventsPageData,
  
    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function () {
			let userOpenId = wx.getStorageSync("userOpenId");
			if (!userOpenId) {
				currentEventsApp.loadUserId();
			}
      this.setData({
        loadingData: true,
      })
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
					selected: 0
				})
			}

			let currentEvents = wx.getStorageSync("currentEvents");
			if (!currentEvents) {
				currentEventsApp.loadCurrentEvents().then((res: IEvent[]) => {
					console.log('Loading sign up form. Received currentEvents: ', res);
					that.setData({
						currentEvents: res,
            loadingData: false,
					})
				})
			} else {
				that.setData({
					currentEvents: currentEvents,
          loadingData: false,
				})
			}
      console.log('that.data.currentEvents: ', that.data.currentEvents)
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
  
    // }
  })