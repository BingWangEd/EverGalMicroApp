// pages/signupForm/index.ts
// To delete
import { IEvent } from "../../app";

const signupFormApp = getApp();

interface ISignUpFormPageData {
  instructions: { [key: string]: any },
  currentEvents?: IEvent[],
  formData: {
    selectedEventId: number,
    selectedEventName: string,
  },
}

Page({
  /**
   * Page initial data
   */
  data: {
    instructions: { 
      en: {
        selectEvent: "Select an event you would like to join",
        other: "Any other questions or concerns?",
        signUp: "Sign up",
        contact: {
          title: 'Contact',
          name: 'Name',
          mobile: 'Mobile',
          email: 'Email',
          footer: 'We\'ll only contact you about event-related info',
        },
      },
      ch: {

      },
      jp: {

      }
    },
    formData: {
      selectedEventId: 1,
      selectedEventName: '',
    },
  } as ISignUpFormPageData,

  // functions
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function () {
    let userOpenId = wx.getStorageSync("userOpenId");
    if (!userOpenId) {
      signupFormApp.loadUserId();
    }
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
    const that = this;
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3
      })
    }

    let currentEvents = wx.getStorageSync("currentEvents");
    if (!currentEvents) {
      signupFormApp.loadCurrentEvents().then((res: IEvent[]) => {
        console.log('Loading sign up form. Received currentEvents: ', res);
        that.setData({
          currentEvents: res
        })
      })
    } else {
      that.setData({
        currentEvents: currentEvents
      })
    }
    this.resetEventDetails();
  },

  resetEventDetails: function () {
    const event = this.data?.currentEvents && this.data.currentEvents.find((event: IEvent) => event.id === this.data.formData.selectedEventId);

    this.setData({
      [`formData.selectedEventLocation`]: event?.location,
      [`formData.selectedEventTime`]: event?.dateTime,
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
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  // onShareAppMessage: function () {

  // }
})