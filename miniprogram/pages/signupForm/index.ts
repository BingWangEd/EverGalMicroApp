// pages/signupForm/index.ts

import { IEvent } from "../../app";

const signupFormApp = getApp();

interface ISignUpFormPageData {
  instructions: { [key: string]: any },
  currentEvents?: IEvent[],
  formData: {
    selectedEvent: number,
    name?: string,
    mobile?: string,
    email?: string,
    other?: string,
  },
  rules: ({
    name: string,
    rules: ({
      required: boolean,
      message: string
    })[]
  })[],
}

// Page(new SignUpFormPage());

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
      selectedEvent: 1,
    },
    rules: [
      {
        name: 'selectedEvent',
        rules: [
          {required: true, message: 'Please select an event you\'d like to join.'}
        ],
      },
      {
        name: 'name',
        rules: [
          {required: true, message: 'Please fill out your name.'}
        ],
      },
      {
        name: 'mobile',
        rules: [
          {required: true, message: 'Please fill out your mobile number.'},
          // { mobile: true, message: 'The format is not correct.' }
        ],
      },
      {
        name: 'email',
        rules: [
          { required: true, message: 'Please fill out your email.' },
          // { email: true, message: 'The format is not correct.' }
        ],
      },
    ]
  } as ISignUpFormPageData,

  // functions
  radioChange: function (e: any) {
    this.setData({
      [`formData.selectedEvent`]: Number(e.detail.value),
    });
    this.resetEventDetails();
  },

  contactInputChange(e: any) {
    const {field} = e.currentTarget.dataset;
    this.setData({
        [`formData.${field}`]: e.detail.value
    });
  },

  nameInputChange: function (e: any) {
    const {field} = e.currentTarget.dataset;
    this.setData({
        [`formData.${field}`]: e.detail.value
    });
  },

  otherInputChange: function (e: any) {
    const {field} = e.currentTarget.dataset;
    this.setData({
        [`formData.${field}`]: e.detail.value
    });
  },

  submitForm: function () {
    this.selectComponent('#form').validate((valid: boolean, errors: any) => {
      if (!valid) {
        const firstError = Object.keys(errors)
        if (firstError.length) {
          this.setData({
            error: errors[firstError[0]].message
          })
        }
      } else {
        const { name, selectedEvent, email, mobile } = this.data.formData;
        const event = this.data.currentEvents?.find((event: IEvent) => event.id === selectedEvent);
        wx.showToast({
            title: 'Thank you~'
        })
        wx.cloud.callFunction({
          name: "signUp", 
          data: {
            eventId: selectedEvent,
            event: event?.name,
            name,
            email,
            mobile,
          },
          success: () => {
            // send signal to reload signed up events
            wx.switchTab({
              url: '/pages/myEvents/index',
            })
          },
          fail: () => {
    
          },
          complete: () => {
    
          },
        })
      }
    })
  },

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
        selected: 0
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
    const event = this.data?.currentEvents && this.data.currentEvents.find((event: IEvent) => event.id === this.data.formData.selectedEvent);

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