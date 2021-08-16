// pages/eventItem/index.js
import { hasOwnProperty, IEvent } from "../../app";
import * as f from "fp-ts";

interface EventItemData {
  loadingData: boolean,
  eventData: IEvent,
  signedUp: boolean,
}

const eventItemApp = getApp();
const getCurrentEvents = async (): Promise<IEvent[]> => {
  const currentEvents = wx.getStorageSync("currentEvents");
  return currentEvents ? currentEvents : await eventItemApp.loadCurrentEvents();
}

Page({
  /**
   * Page initial data
   */
  data: {
    loadingData: true
  } as EventItemData,

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: async function (query: unknown) {
    const that = this;
    that.setData({
      loadingData: true,
      slideButtons: [{
        type: 'warn',
        text: 'cancel reservation',
        src: '/images/cross_pink.png',
      }],
    });
    const currentEvents = await getCurrentEvents();
    const verifyQuery = (query: unknown): f.either.Either<Error, number> =>
    query && typeof query === 'object'
    && hasOwnProperty(query, 'eventId') && typeof query.eventId === 'string' ?
    f.either.right(Number(query.eventId)) : f.either.left(new Error('query does not have key: eventId'));
    // @ts-ignorets-ignore TODO: add check for signedUp
    console.log('signedup: ', query.signedUp);
    f.function.pipe(
      query,
      verifyQuery,
      f.either.map((eventId) => {
        const currentEvent = currentEvents.find((event)=> event.id === eventId);
        if (currentEvent) {
          that.setData({
            eventData: currentEvent,
            // @ts-ignorets-ignore TODO: add check for signedUp
            signedUp: query.signedUp,
            loadingData: false
          })
        } else {
          that.setData({
            loadingData: false
          })
        }
      })
    );


  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

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
    return {}
  },

  // Use any as type for now; as official typing does not include event type yet
  slideButtonTap: function () {
    const that = this;
    that.setData({
      loadingData: true,
    })

    const event = that.data.eventData as IEvent;
    const userOpenId = eventItemApp.globalData.userOpenId;

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
          signedUp: false
        })
        that.setData({
          loadingData: false,
        })
      }
    });
  },
})
