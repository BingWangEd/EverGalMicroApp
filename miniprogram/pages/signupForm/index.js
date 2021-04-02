// pages/signupForm/index.js

const app=getApp();

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
    currentEvents: undefined,
    // currentEvents: [
    //   {
    //     id: 1,
    //     name: 'Yoga',
    //     location: 'Yoga Six Studio',
    //     meetSpot: 'Line 4 Jinshajiang Station Exit 3',
    //     date: {
    //       year: 2021,
    //       date: 'Mar. 31',
    //       day: 'Sat'
    //     },
    //     time: '8:00 am',
    //     headsup: ['Bring your yoga mat.', 'Don\'t be late.'],
    //     checked: true,
    //   },
    //   {
    //     id: 2,
    //     name: 'Bouldering',
    //     location: 'Bolder Studio',
    //     meetSpot: 'Line 4 Jinshajiang Station Exit 3',
    //     dateTime: 'Mar. 13 Sun at 6 pm',
    //     headsup: ['Climbing shoes can be rented.', 'Don\'t be late.'],
    //   },
    // ],
    formData: {
      selectedEvent: 1,
      name: undefined,
      mobile: undefined,
      email: undefined,
      other: undefined,
    },
    rules: [
      {
        name: 'selectedEvent',
        rules: {required: true, message: 'Please select an event you\'d like to join.'},
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
          // {mobile: true, message: 'The format is not correct.'}
        ],
      },
      {
        name: 'email',
        rules: [
          {required: true, message: 'Please fill out your email.'},
          // {email: true, message: 'The format is not correct.'}
        ],
      },
    ]
  },

  // functions
  radioChange: function (e) {
    this.setData({
      [`formData.selectedEvent`]: e.detail.value
    });
  },
  contactInputChange: function (e) {
    const {field} = e.currentTarget.dataset;
    this.setData({
        [`formData.${field}`]: e.detail.value
    });
  },
  nameInputChange: function (e) {
    const {field} = e.currentTarget.dataset;
    this.setData({
        [`formData.${field}`]: e.detail.value
    });
  },
  otherInputChange: function (e) {
    const {field} = e.currentTarget.dataset;
    this.setData({
        [`formData.${field}`]: e.detail.value
    });
  },
  submitForm: function () {
    this.selectComponent('#form').validate((valid, errors) => {
      console.log('valid', valid, errors)
      if (!valid) {
        const firstError = Object.keys(errors)
        if (firstError.length) {
          this.setData({
            error: errors[firstError[0]].message
          })
        }
      } else {
        const { name, selectedEvent, email, mobile } = this.data.formData;
        const event = this.data.currentEvents[selectedEvent-1];
        const app = getApp();
        app.globalData.selectedEvent = selectedEvent;
        app.globalData.eventDetails = event;
        wx.showToast({
            title: 'Thank you~'
        })
        wx.cloud.callFunction({
          name: "signUp", 
          data: {
            eventId: selectedEvent,
            event: event.name,
            name,
            email,
            mobile,
          },
          success: (res) => {
            wx.switchTab({
              url: '/pages/myEvents/index',
            })
          },
          fail: (res) => {
    
          },
          complete: (res) => {
    
          },
        })
      }
  })
},

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let currentEvents = wx.getStorageSync("currentEvents");
    if (!currentEvents) {
      app.loadCurrentEvents().then(res => {
        console.log('Loading sign up form. Received currentEvents: ', res);
        this.setData({
          currentEvents: res
        })
      })
    }

    let userOpenId = wx.getStorageSync("userOpenId");
    if (!userOpenId) {
      app.loadUserId();
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
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
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

  }
})