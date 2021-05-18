// components/tabbar.js
Component({
  data: {
    selected: 0,
    "color": "#797979",
    "selectedColor": "#64C0A9",
    "list": [
      {
        "text": "Current Events",
        "iconPath": "/images/pencil_gray.png",
        "selectedIconPath": "/images/pencil_mint.png",
        "pagePath": "/pages/currentEvents/index"
      },
      {
        "text": "My Events",
        "iconPath": "/images/eventCalendar_gray.png",
        "selectedIconPath": "/images/eventCalendar_mint.png",
        "pagePath": "/pages/myEvents/index"
      },
      {
        "text": "About EverGal",
        "iconPath": "/images/logo_mint_text_scribbled_outline.png",
        "selectedIconPath": "/images/logo_white_text.png",
        "pagePath": "/pages/aboutEverGal/index"
      },
      {
        "text": "Sign Up",
        "iconPath": "/images/pencil_gray.png",
        "selectedIconPath": "/images/pencil_mint.png",
        "pagePath": "/pages/signupForm/index"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const url = data.path;
      wx.switchTab({
        url
      })
      // wx.navigateTo({url})
      this.setData({
        selected: data.index
      })
    }
  }
})
