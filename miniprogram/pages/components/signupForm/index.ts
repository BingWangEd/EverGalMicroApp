// pages/components/signupForm.js
import * as f from "fp-ts";

interface SignupData {
  eventId?: number,
  eventName?: string,
  name?: string,
  email?: string,
  mobile?: string,
}

interface SignupFormData {
  formData: SignupData,
  instructions: { [key: string]: any },
  rules: ({
    name: string,
    rules: ({
      required: boolean,
      message: string
    })[]
  })[],
}

Component({
  /**
   * Component properties
   */
  properties: {
    eventId: {
      type: Number,
      value: -1// eventId, 
    },
    eventName: {
      type: String,
      value: ""
    }
  },

  /**
   * Component initial data
   */
  data: {
    rules: [
      {
        name: 'name',
        rules: [
          { required: true, message: 'Please fill out your name.'}
        ],
      },
      {
        name: 'mobile',
        rules: [
          { required: true, message: 'Please fill out your mobile number.'},
          { mobile: true, message: 'The format is not correct.' }
        ],
      },
      {
        name: 'email',
        rules: [
          { required: true, message: 'Please fill out your email.' },
          { email: true, message: 'The format is not correct.' }
        ],
      },
    ],

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
        }
      }
    },

    formData: {

    }
  } as SignupFormData,

  /**
   * Component methods
   */
  methods: {
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
      const validateForm = (component: WechatMiniprogram.Component.TrivialInstance): f.either.Either<Error, SignupData> => {
        const that = this;
        let response: f.either.Either<Error, SignupData> | undefined = undefined;
        component.validate((valid: boolean, errors: any) => {
          if (valid) {
            const { name, email, mobile } = that.data.formData;
            const eventId = that.data.eventId;
            const eventName = that.data.eventName;
            response = f.either.right({
              eventId,
              eventName,
              name,
              email,
              mobile,
            });
          } else {
            const firstError = Object.keys(errors);
            const error = Boolean(firstError.length) ? new Error(errors[firstError[0]].message) : new Error('Sorry, an unknown error in the form has occurred.');
            response = f.either.left(error);
          }
        })
        console.log('submit form response: ', response);
        return response ?? f.either.left(new Error('submit form response is undefined'));
      }

      f.function.pipe(
        this.selectComponent('#form'),
        validateForm,
        f.either.fold(
          (error) => {
            this.setData({
              error: error.message
            })
          },
          (data) => {
            console.log('data: ', data);
            wx.showToast({
              title: 'Thank you~'
            })
            wx.cloud.callFunction({
              name: "signUp", 
              data,
              success: () => {
                // send signal to reload signed up events
                wx.switchTab({
                  url: '/pages/myEvents/index', // TODO: may need to pass some data
                })
              },
              fail: () => {
        
              },
              complete: () => {
        
              },
            });
          }
        )
      )
    },
  }
})