"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var signupFormApp = getApp();
Page({
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
            ch: {},
            jp: {}
        },
        formData: {
            selectedEvent: 1,
        },
        rules: [
            {
                name: 'selectedEvent',
                rules: [
                    { required: true, message: 'Please select an event you\'d like to join.' }
                ],
            },
            {
                name: 'name',
                rules: [
                    { required: true, message: 'Please fill out your name.' }
                ],
            },
            {
                name: 'mobile',
                rules: [
                    { required: true, message: 'Please fill out your mobile number.' },
                ],
            },
            {
                name: 'email',
                rules: [
                    { required: true, message: 'Please fill out your email.' },
                ],
            },
        ]
    },
    radioChange: function (e) {
        var _a;
        this.setData((_a = {},
            _a["formData.selectedEvent"] = Number(e.detail.value),
            _a));
        this.resetEventDetails();
    },
    contactInputChange: function (e) {
        var _a;
        var field = e.currentTarget.dataset.field;
        this.setData((_a = {},
            _a["formData." + field] = e.detail.value,
            _a));
    },
    nameInputChange: function (e) {
        var _a;
        var field = e.currentTarget.dataset.field;
        this.setData((_a = {},
            _a["formData." + field] = e.detail.value,
            _a));
    },
    otherInputChange: function (e) {
        var _a;
        var field = e.currentTarget.dataset.field;
        this.setData((_a = {},
            _a["formData." + field] = e.detail.value,
            _a));
    },
    submitForm: function () {
        var _this = this;
        this.selectComponent('#form').validate(function (valid, errors) {
            var _a;
            if (!valid) {
                var firstError = Object.keys(errors);
                if (firstError.length) {
                    _this.setData({
                        error: errors[firstError[0]].message
                    });
                }
            }
            else {
                var _b = _this.data.formData, name = _b.name, selectedEvent_1 = _b.selectedEvent, email = _b.email, mobile = _b.mobile;
                var event = (_a = _this.data.currentEvents) === null || _a === void 0 ? void 0 : _a.find(function (event) { return event.id === selectedEvent_1; });
                wx.showToast({
                    title: 'Thank you~'
                });
                wx.cloud.callFunction({
                    name: "signUp",
                    data: {
                        eventId: selectedEvent_1,
                        event: event === null || event === void 0 ? void 0 : event.name,
                        name: name,
                        email: email,
                        mobile: mobile,
                    },
                    success: function () {
                        wx.switchTab({
                            url: '/pages/myEvents/index',
                        });
                    },
                    fail: function () {
                    },
                    complete: function () {
                    },
                });
            }
        });
    },
    onLoad: function () {
        var userOpenId = wx.getStorageSync("userOpenId");
        if (!userOpenId) {
            signupFormApp.loadUserId();
        }
    },
    onReady: function () {
    },
    onShow: function () {
        var that = this;
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            this.getTabBar().setData({
                selected: 3
            });
        }
        var currentEvents = wx.getStorageSync("currentEvents");
        if (!currentEvents) {
            signupFormApp.loadCurrentEvents().then(function (res) {
                console.log('Loading sign up form. Received currentEvents: ', res);
                that.setData({
                    currentEvents: res
                });
            });
        }
        else {
            that.setData({
                currentEvents: currentEvents
            });
        }
        this.resetEventDetails();
    },
    resetEventDetails: function () {
        var _a;
        var _this = this;
        var _b;
        var event = ((_b = this.data) === null || _b === void 0 ? void 0 : _b.currentEvents) && this.data.currentEvents.find(function (event) { return event.id === _this.data.formData.selectedEvent; });
        this.setData((_a = {},
            _a["formData.selectedEventLocation"] = event === null || event === void 0 ? void 0 : event.location,
            _a["formData.selectedEventTime"] = event === null || event === void 0 ? void 0 : event.dateTime,
            _a));
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLElBQU0sYUFBYSxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBcUIvQixJQUFJLENBQUM7SUFJSCxJQUFJLEVBQUU7UUFDSixZQUFZLEVBQUU7WUFDWixFQUFFLEVBQUU7Z0JBQ0YsV0FBVyxFQUFFLHdDQUF3QztnQkFDckQsS0FBSyxFQUFFLGtDQUFrQztnQkFDekMsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLE9BQU8sRUFBRTtvQkFDUCxLQUFLLEVBQUUsU0FBUztvQkFDaEIsSUFBSSxFQUFFLE1BQU07b0JBQ1osTUFBTSxFQUFFLFFBQVE7b0JBQ2hCLEtBQUssRUFBRSxPQUFPO29CQUNkLE1BQU0sRUFBRSxrREFBa0Q7aUJBQzNEO2FBQ0Y7WUFDRCxFQUFFLEVBQUUsRUFFSDtZQUNELEVBQUUsRUFBRSxFQUVIO1NBQ0Y7UUFDRCxRQUFRLEVBQUU7WUFDUixhQUFhLEVBQUUsQ0FBQztTQUNqQjtRQUNELEtBQUssRUFBRTtZQUNMO2dCQUNFLElBQUksRUFBRSxlQUFlO2dCQUNyQixLQUFLLEVBQUU7b0JBQ0wsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSw2Q0FBNkMsRUFBQztpQkFDekU7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRTtvQkFDTCxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLDRCQUE0QixFQUFDO2lCQUN4RDthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFO29CQUNMLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUscUNBQXFDLEVBQUM7aUJBRWpFO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUU7b0JBQ0wsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8s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S0FBSyxDQUFDLEVBQUUsS0FBSyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQTdDLENBQTZDLENBQUMsQ0FBQztRQUV6SSxJQUFJLENBQUMsT0FBTztZQUNWLEdBQUMsZ0NBQWdDLElBQUcsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFFBQVE7WUFDbkQsR0FBQyw0QkFBNEIsSUFBRyxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsUUFBUTtnQkFDL0MsQ0FBQztJQUNMLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztJQUtELGFBQWE7SUFFYixDQUFDO0NBUUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvc2lnbnVwRm9ybS9pbmRleC50c1xuXG5pbXBvcnQgeyBJRXZlbnQgfSBmcm9tIFwiLi4vLi4vYXBwXCI7XG5cbmNvbnN0IHNpZ251cEZvcm1BcHAgPSBnZXRBcHAoKTtcblxuaW50ZXJmYWNlIElTaWduVXBGb3JtUGFnZURhdGEge1xuICBpbnN0cnVjdGlvbnM6IHsgW2tleTogc3RyaW5nXTogYW55IH0sXG4gIGN1cnJlbnRFdmVudHM/OiBJRXZlbnRbXSxcbiAgZm9ybURhdGE6IHtcbiAgICBzZWxlY3RlZEV2ZW50OiBudW1iZXIsXG4gICAgbmFtZT86IHN0cmluZyxcbiAgICBtb2JpbGU/OiBzdHJpbmcsXG4gICAgZW1haWw/OiBzdHJpbmcsXG4gICAgb3RoZXI/OiBzdHJpbmcsXG4gIH0sXG4gIHJ1bGVzOiAoe1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICBydWxlczogKHtcbiAgICAgIHJlcXVpcmVkOiBib29sZWFuLFxuICAgICAgbWVzc2FnZTogc3RyaW5nXG4gICAgfSlbXVxuICB9KVtdLFxufVxuXG5QYWdlKHtcbiAgLyoqXG4gICAqIFBhZ2UgaW5pdGlhbCBkYXRhXG4gICAqL1xuICBkYXRhOiB7XG4gICAgaW5zdHJ1Y3Rpb25zOiB7IFxuICAgICAgZW46IHtcbiAgICAgICAgc2VsZWN0RXZlbnQ6IFwiU2VsZWN0IGFuIGV2ZW50IHlvdSB3b3VsZCBsaWtlIHRvIGpvaW5cIixcbiAgICAgICAgb3RoZXI6IFwiQW55IG90aGVyIHF1ZXN0aW9ucyBvciBjb25jZXJucz9cIixcbiAgICAgICAgc2lnblVwOiBcIlNpZ24gdXBcIixcbiAgICAgICAgY29udGFjdDoge1xuICAgICAgICAgIHRpdGxlOiAnQ29udGFjdCcsXG4gICAgICAgICAgbmFtZTogJ05hbWUnLFxuICAgICAgICAgIG1vYmlsZTogJ01vYmlsZScsXG4gICAgICAgICAgZW1haWw6ICdFbWFpbCcsXG4gICAgICAgICAgZm9vdGVyOiAnV2VcXCdsbCBvbmx5IGNvbnRhY3QgeW91IGFib3V0IGV2ZW50LXJlbGF0ZWQgaW5mbycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgY2g6IHtcblxuICAgICAgfSxcbiAgICAgIGpwOiB7XG5cbiAgICAgIH1cbiAgICB9LFxuICAgIGZvcm1EYXRhOiB7XG4gICAgICBzZWxlY3RlZEV2ZW50OiAxLFxuICAgIH0sXG4gICAgcnVsZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3NlbGVjdGVkRXZlbnQnLFxuICAgICAgICBydWxlczogW1xuICAgICAgICAgIHtyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBzZWxlY3QgYW4gZXZlbnQgeW91XFwnZCBsaWtlIHRvIGpvaW4uJ31cbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICB7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgZmlsbCBvdXQgeW91ciBuYW1lLid9XG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnbW9iaWxlJyxcbiAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICB7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgZmlsbCBvdXQgeW91ciBtb2JpbGUgbnVtYmVyLid9LFxuICAgICAgICAgIC8vIHsgbW9iaWxlOiB0cnVlLCBtZXNzYWdlOiAnVGhlIGZvcm1hdCBpcyBub3QgY29ycmVjdC4nIH1cbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdlbWFpbCcsXG4gICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBmaWxsIG91dCB5b3VyIGVtYWlsLicgfSxcbiAgICAgICAgICAvLyB7IGVtYWlsOiB0cnVlLCBtZXNzYWdlOiAnVGhlIGZvcm1hdCBpcyBub3QgY29ycmVjdC4nIH1cbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXVxuICB9IGFzIElTaWduVXBGb3JtUGFnZURhdGEsXG5cbiAgLy8gZnVuY3Rpb25zXG4gIHJhZGlvQ2hhbmdlOiBmdW5jdGlvbiAoZTogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIFtgZm9ybURhdGEuc2VsZWN0ZWRFdmVudGBdOiBOdW1iZXIoZS5kZXRhaWwudmFsdWUpLFxuICAgIH0pO1xuICAgIHRoaXMucmVzZXRFdmVudERldGFpbHMoKTtcbiAgfSxcblxuICBjb250YWN0SW5wdXRDaGFuZ2UoZTogYW55KSB7XG4gICAgY29uc3Qge2ZpZWxkfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIFtgZm9ybURhdGEuJHtmaWVsZH1gXTogZS5kZXRhaWwudmFsdWVcbiAgICB9KTtcbiAgfSxcblxuICBuYW1lSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uIChlOiBhbnkpIHtcbiAgICBjb25zdCB7ZmllbGR9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgW2Bmb3JtRGF0YS4ke2ZpZWxkfWBdOiBlLmRldGFpbC52YWx1ZVxuICAgIH0pO1xuICB9LFxuXG4gIG90aGVySW5wdXRDaGFuZ2U6IGZ1bmN0aW9uIChlOiBhbnkpIHtcbiAgICBjb25zdCB7ZmllbGR9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgW2Bmb3JtRGF0YS4ke2ZpZWxkfWBdOiBlLmRldGFpbC52YWx1ZVxuICAgIH0pO1xuICB9LFxuXG4gIHN1Ym1pdEZvcm06IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2Zvcm0nKS52YWxpZGF0ZSgodmFsaWQ6IGJvb2xlYW4sIGVycm9yczogYW55KSA9PiB7XG4gICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0RXJyb3IgPSBPYmplY3Qua2V5cyhlcnJvcnMpXG4gICAgICAgIGlmIChmaXJzdEVycm9yLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICBlcnJvcjogZXJyb3JzW2ZpcnN0RXJyb3JbMF1dLm1lc3NhZ2VcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHNlbGVjdGVkRXZlbnQsIGVtYWlsLCBtb2JpbGUgfSA9IHRoaXMuZGF0YS5mb3JtRGF0YTtcbiAgICAgICAgY29uc3QgZXZlbnQgPSB0aGlzLmRhdGEuY3VycmVudEV2ZW50cz8uZmluZCgoZXZlbnQ6IElFdmVudCkgPT4gZXZlbnQuaWQgPT09IHNlbGVjdGVkRXZlbnQpO1xuICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6ICdUaGFuayB5b3V+J1xuICAgICAgICB9KVxuICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xuICAgICAgICAgIG5hbWU6IFwic2lnblVwXCIsIFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGV2ZW50SWQ6IHNlbGVjdGVkRXZlbnQsXG4gICAgICAgICAgICBldmVudDogZXZlbnQ/Lm5hbWUsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICBtb2JpbGUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAvLyBzZW5kIHNpZ25hbCB0byByZWxvYWQgc2lnbmVkIHVwIGV2ZW50c1xuICAgICAgICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL215RXZlbnRzL2luZGV4JyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiAoKSA9PiB7XG4gICAgXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgIFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiBwYWdlIGxvYWRcbiAgICovXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgIGxldCB1c2VyT3BlbklkID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJ1c2VyT3BlbklkXCIpO1xuICAgIGlmICghdXNlck9wZW5JZCkge1xuICAgICAgc2lnbnVwRm9ybUFwcC5sb2FkVXNlcklkKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBMaWZlY3ljbGUgZnVuY3Rpb24tLUNhbGxlZCB3aGVuIHBhZ2UgaXMgaW5pdGlhbGx5IHJlbmRlcmVkXG4gICAqL1xuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiBwYWdlIHNob3dcbiAgICovXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgdGhpcy5nZXRUYWJCYXIgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIHRoaXMuZ2V0VGFiQmFyKCkpIHtcbiAgICAgIHRoaXMuZ2V0VGFiQmFyKCkuc2V0RGF0YSh7XG4gICAgICAgIHNlbGVjdGVkOiAzXG4gICAgICB9KVxuICAgIH1cblxuICAgIGxldCBjdXJyZW50RXZlbnRzID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJjdXJyZW50RXZlbnRzXCIpO1xuICAgIGlmICghY3VycmVudEV2ZW50cykge1xuICAgICAgc2lnbnVwRm9ybUFwcC5sb2FkQ3VycmVudEV2ZW50cygpLnRoZW4oKHJlczogSUV2ZW50W10pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0xvYWRpbmcgc2lnbiB1cCBmb3JtLiBSZWNlaXZlZCBjdXJyZW50RXZlbnRzOiAnLCByZXMpO1xuICAgICAgICB0aGF0LnNldERhdGEoe1xuICAgICAgICAgIGN1cnJlbnRFdmVudHM6IHJlc1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5zZXREYXRhKHtcbiAgICAgICAgY3VycmVudEV2ZW50czogY3VycmVudEV2ZW50c1xuICAgICAgfSlcbiAgICB9XG4gICAgdGhpcy5yZXNldEV2ZW50RGV0YWlscygpO1xuICB9LFxuXG4gIHJlc2V0RXZlbnREZXRhaWxzOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZXZlbnQgPSB0aGlzLmRhdGE/LmN1cnJlbnRFdmVudHMgJiYgdGhpcy5kYXRhLmN1cnJlbnRFdmVudHMuZmluZCgoZXZlbnQ6IElFdmVudCkgPT4gZXZlbnQuaWQgPT09IHRoaXMuZGF0YS5mb3JtRGF0YS5zZWxlY3RlZEV2ZW50KTtcblxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBbYGZvcm1EYXRhLnNlbGVjdGVkRXZlbnRMb2NhdGlvbmBdOiBldmVudD8ubG9jYXRpb24sXG4gICAgICBbYGZvcm1EYXRhLnNlbGVjdGVkRXZlbnRUaW1lYF06IGV2ZW50Py5kYXRlVGltZSxcbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiBwYWdlIGhpZGVcbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIExpZmVjeWNsZSBmdW5jdGlvbi0tQ2FsbGVkIHdoZW4gcGFnZSB1bmxvYWRcbiAgICovXG4gIG9uVW5sb2FkKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIFBhZ2UgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi0tQ2FsbGVkIHdoZW4gdXNlciBkcm9wIGRvd25cbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHBhZ2UgcmVhY2ggYm90dG9tXG4gICAqL1xuICBvblJlYWNoQm90dG9tKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHVzZXIgY2xpY2sgb24gdGhlIHRvcCByaWdodCBjb3JuZXIgdG8gc2hhcmVcbiAgICovXG4gIC8vIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbiAoKSB7XG5cbiAgLy8gfVxufSkiXX0=