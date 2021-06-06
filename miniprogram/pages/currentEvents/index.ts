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

    navToSignUp: function () {
      wx.navigateTo({
        url: '',
        events: {
          // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
          // acceptDataFromOpenedPage: function(data) {
            // console.log(data)
          // },
          // someEvent: function(data ) {
            // console.log(data)
          // }
        },
        // success: function(res) {
          // 通过eventChannel向被打开页面传送数据
          // res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
        // }
      })
    }
  })