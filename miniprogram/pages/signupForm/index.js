"use strict";
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
                selected: 0
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsSUFBTSxhQUFhLEdBQUcsTUFBTSxFQUFFLENBQUM7QUF1Qi9CLElBQUksQ0FBQztJQUlILElBQUksRUFBRTtRQUNKLFlBQVksRUFBRTtZQUNaLEVBQUUsRUFBRTtnQkFDRixXQUFXLEVBQUUsd0NBQXdDO2dCQUNyRCxLQUFLLEVBQUUsa0NBQWtDO2dCQUN6QyxNQUFNLEVBQUUsU0FBUztnQkFDakIsT0FBTyxFQUFFO29CQUNQLEtBQUssRUFBRSxTQUFTO29CQUNoQixJQUFJLEVBQUUsTUFBTTtvQkFDWixNQUFNLEVBQUUsUUFBUTtvQkFDaEIsS0FBSyxFQUFFLE9BQU87b0JBQ2QsTUFBTSxFQUFFLGtEQUFrRDtpQkFDM0Q7YUFDRjtZQUNELEVBQUUsRUFBRSxFQUVIO1lBQ0QsRUFBRSxFQUFFLEVBRUg7U0FDRjtRQUNELFFBQVEsRUFBRTtZQUNSLGFBQWEsRUFBRSxDQUFDO1NBQ2pCO1FBQ0QsS0FBSyxFQUFFO1lBQ0w7Z0JBQ0UsSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCLEtBQUssRUFBRTtvQkFDTCxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLDZDQUE2QyxFQUFDO2lCQUN6RTthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFO29CQUNMLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUM7aUJBQ3hEO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUU7b0JBQ0wsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxxQ0FBcUMsRUFBQztpQkFFakU7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRTtvQkFDTCxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxF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QUFLLENBQUMsRUFBRSxLQUFLLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBN0MsQ0FBNkMsQ0FBQyxDQUFDO1FBRXpJLElBQUksQ0FBQyxPQUFPO1lBQ1YsR0FBQyxnQ0FBZ0MsSUFBRyxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsUUFBUTtZQUNuRCxHQUFDLDRCQUE0QixJQUFHLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxRQUFRO2dCQUMvQyxDQUFDO0lBQ0wsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0lBS0QsYUFBYTtJQUViLENBQUM7Q0FRRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9zaWdudXBGb3JtL2luZGV4LnRzXG5cbmNvbnN0IHNpZ251cEZvcm1BcHAgPSBnZXRBcHAoKTtcblxuaW50ZXJmYWNlIElTaWduVXBGb3JtUGFnZURhdGEge1xuICBpbnN0cnVjdGlvbnM6IHsgW2tleTogc3RyaW5nXTogYW55IH0sXG4gIGN1cnJlbnRFdmVudHM/OiBJRXZlbnRbXSxcbiAgZm9ybURhdGE6IHtcbiAgICBzZWxlY3RlZEV2ZW50OiBudW1iZXIsXG4gICAgbmFtZT86IHN0cmluZyxcbiAgICBtb2JpbGU/OiBzdHJpbmcsXG4gICAgZW1haWw/OiBzdHJpbmcsXG4gICAgb3RoZXI/OiBzdHJpbmcsXG4gIH0sXG4gIHJ1bGVzOiAoe1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICBydWxlczogKHtcbiAgICAgIHJlcXVpcmVkOiBib29sZWFuLFxuICAgICAgbWVzc2FnZTogc3RyaW5nXG4gICAgfSlbXVxuICB9KVtdLFxufVxuXG4vLyBQYWdlKG5ldyBTaWduVXBGb3JtUGFnZSgpKTtcblxuUGFnZSh7XG4gIC8qKlxuICAgKiBQYWdlIGluaXRpYWwgZGF0YVxuICAgKi9cbiAgZGF0YToge1xuICAgIGluc3RydWN0aW9uczogeyBcbiAgICAgIGVuOiB7XG4gICAgICAgIHNlbGVjdEV2ZW50OiBcIlNlbGVjdCBhbiBldmVudCB5b3Ugd291bGQgbGlrZSB0byBqb2luXCIsXG4gICAgICAgIG90aGVyOiBcIkFueSBvdGhlciBxdWVzdGlvbnMgb3IgY29uY2VybnM/XCIsXG4gICAgICAgIHNpZ25VcDogXCJTaWduIHVwXCIsXG4gICAgICAgIGNvbnRhY3Q6IHtcbiAgICAgICAgICB0aXRsZTogJ0NvbnRhY3QnLFxuICAgICAgICAgIG5hbWU6ICdOYW1lJyxcbiAgICAgICAgICBtb2JpbGU6ICdNb2JpbGUnLFxuICAgICAgICAgIGVtYWlsOiAnRW1haWwnLFxuICAgICAgICAgIGZvb3RlcjogJ1dlXFwnbGwgb25seSBjb250YWN0IHlvdSBhYm91dCBldmVudC1yZWxhdGVkIGluZm8nLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNoOiB7XG5cbiAgICAgIH0sXG4gICAgICBqcDoge1xuXG4gICAgICB9XG4gICAgfSxcbiAgICBmb3JtRGF0YToge1xuICAgICAgc2VsZWN0ZWRFdmVudDogMSxcbiAgICB9LFxuICAgIHJ1bGVzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdzZWxlY3RlZEV2ZW50JyxcbiAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICB7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2Ugc2VsZWN0IGFuIGV2ZW50IHlvdVxcJ2QgbGlrZSB0byBqb2luLid9XG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAge3JlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGZpbGwgb3V0IHlvdXIgbmFtZS4nfVxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ21vYmlsZScsXG4gICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAge3JlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGZpbGwgb3V0IHlvdXIgbW9iaWxlIG51bWJlci4nfSxcbiAgICAgICAgICAvLyB7IG1vYmlsZTogdHJ1ZSwgbWVzc2FnZTogJ1RoZSBmb3JtYXQgaXMgbm90IGNvcnJlY3QuJyB9XG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnZW1haWwnLFxuICAgICAgICBydWxlczogW1xuICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgZmlsbCBvdXQgeW91ciBlbWFpbC4nIH0sXG4gICAgICAgICAgLy8geyBlbWFpbDogdHJ1ZSwgbWVzc2FnZTogJ1RoZSBmb3JtYXQgaXMgbm90IGNvcnJlY3QuJyB9XG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF1cbiAgfSBhcyBJU2lnblVwRm9ybVBhZ2VEYXRhLFxuXG4gIC8vIGZ1bmN0aW9uc1xuICByYWRpb0NoYW5nZTogZnVuY3Rpb24gKGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBbYGZvcm1EYXRhLnNlbGVjdGVkRXZlbnRgXTogTnVtYmVyKGUuZGV0YWlsLnZhbHVlKSxcbiAgICB9KTtcbiAgICB0aGlzLnJlc2V0RXZlbnREZXRhaWxzKCk7XG4gIH0sXG5cbiAgY29udGFjdElucHV0Q2hhbmdlKGU6IGFueSkge1xuICAgIGNvbnN0IHtmaWVsZH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBbYGZvcm1EYXRhLiR7ZmllbGR9YF06IGUuZGV0YWlsLnZhbHVlXG4gICAgfSk7XG4gIH0sXG5cbiAgbmFtZUlucHV0Q2hhbmdlOiBmdW5jdGlvbiAoZTogYW55KSB7XG4gICAgY29uc3Qge2ZpZWxkfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIFtgZm9ybURhdGEuJHtmaWVsZH1gXTogZS5kZXRhaWwudmFsdWVcbiAgICB9KTtcbiAgfSxcblxuICBvdGhlcklucHV0Q2hhbmdlOiBmdW5jdGlvbiAoZTogYW55KSB7XG4gICAgY29uc3Qge2ZpZWxkfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIFtgZm9ybURhdGEuJHtmaWVsZH1gXTogZS5kZXRhaWwudmFsdWVcbiAgICB9KTtcbiAgfSxcblxuICBzdWJtaXRGb3JtOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNmb3JtJykudmFsaWRhdGUoKHZhbGlkOiBib29sZWFuLCBlcnJvcnM6IGFueSkgPT4ge1xuICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICBjb25zdCBmaXJzdEVycm9yID0gT2JqZWN0LmtleXMoZXJyb3JzKVxuICAgICAgICBpZiAoZmlyc3RFcnJvci5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgZXJyb3I6IGVycm9yc1tmaXJzdEVycm9yWzBdXS5tZXNzYWdlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCBzZWxlY3RlZEV2ZW50LCBlbWFpbCwgbW9iaWxlIH0gPSB0aGlzLmRhdGEuZm9ybURhdGE7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5kYXRhLmN1cnJlbnRFdmVudHM/LmZpbmQoKGV2ZW50OiBJRXZlbnQpID0+IGV2ZW50LmlkID09PSBzZWxlY3RlZEV2ZW50KTtcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAnVGhhbmsgeW91fidcbiAgICAgICAgfSlcbiAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcbiAgICAgICAgICBuYW1lOiBcInNpZ25VcFwiLCBcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBldmVudElkOiBzZWxlY3RlZEV2ZW50LFxuICAgICAgICAgICAgZXZlbnQ6IGV2ZW50Py5uYW1lLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgbW9iaWxlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgLy8gc2VuZCBzaWduYWwgdG8gcmVsb2FkIHNpZ25lZCB1cCBldmVudHNcbiAgICAgICAgICAgIHd4LnN3aXRjaFRhYih7XG4gICAgICAgICAgICAgIHVybDogJy9wYWdlcy9teUV2ZW50cy9pbmRleCcsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogKCkgPT4ge1xuICAgIFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICBcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIExpZmVjeWNsZSBmdW5jdGlvbi0tQ2FsbGVkIHdoZW4gcGFnZSBsb2FkXG4gICAqL1xuICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgdXNlck9wZW5JZCA9IHd4LmdldFN0b3JhZ2VTeW5jKFwidXNlck9wZW5JZFwiKTtcbiAgICBpZiAoIXVzZXJPcGVuSWQpIHtcbiAgICAgIHNpZ251cEZvcm1BcHAubG9hZFVzZXJJZCgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiBwYWdlIGlzIGluaXRpYWxseSByZW5kZXJlZFxuICAgKi9cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIExpZmVjeWNsZSBmdW5jdGlvbi0tQ2FsbGVkIHdoZW4gcGFnZSBzaG93XG4gICAqL1xuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBpZiAodHlwZW9mIHRoaXMuZ2V0VGFiQmFyID09PSAnZnVuY3Rpb24nICYmXG4gICAgICB0aGlzLmdldFRhYkJhcigpKSB7XG4gICAgICB0aGlzLmdldFRhYkJhcigpLnNldERhdGEoe1xuICAgICAgICBzZWxlY3RlZDogMFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBsZXQgY3VycmVudEV2ZW50cyA9IHd4LmdldFN0b3JhZ2VTeW5jKFwiY3VycmVudEV2ZW50c1wiKTtcbiAgICBpZiAoIWN1cnJlbnRFdmVudHMpIHtcbiAgICAgIHNpZ251cEZvcm1BcHAubG9hZEN1cnJlbnRFdmVudHMoKS50aGVuKChyZXM6IElFdmVudFtdKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2FkaW5nIHNpZ24gdXAgZm9ybS4gUmVjZWl2ZWQgY3VycmVudEV2ZW50czogJywgcmVzKTtcbiAgICAgICAgdGhhdC5zZXREYXRhKHtcbiAgICAgICAgICBjdXJyZW50RXZlbnRzOiByZXNcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuc2V0RGF0YSh7XG4gICAgICAgIGN1cnJlbnRFdmVudHM6IGN1cnJlbnRFdmVudHNcbiAgICAgIH0pXG4gICAgfVxuICAgIHRoaXMucmVzZXRFdmVudERldGFpbHMoKTtcbiAgfSxcblxuICByZXNldEV2ZW50RGV0YWlsczogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5kYXRhPy5jdXJyZW50RXZlbnRzICYmIHRoaXMuZGF0YS5jdXJyZW50RXZlbnRzLmZpbmQoKGV2ZW50OiBJRXZlbnQpID0+IGV2ZW50LmlkID09PSB0aGlzLmRhdGEuZm9ybURhdGEuc2VsZWN0ZWRFdmVudCk7XG5cbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgW2Bmb3JtRGF0YS5zZWxlY3RlZEV2ZW50TG9jYXRpb25gXTogZXZlbnQ/LmxvY2F0aW9uLFxuICAgICAgW2Bmb3JtRGF0YS5zZWxlY3RlZEV2ZW50VGltZWBdOiBldmVudD8uZGF0ZVRpbWUsXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIExpZmVjeWNsZSBmdW5jdGlvbi0tQ2FsbGVkIHdoZW4gcGFnZSBoaWRlXG4gICAqL1xuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiBMaWZlY3ljbGUgZnVuY3Rpb24tLUNhbGxlZCB3aGVuIHBhZ2UgdW5sb2FkXG4gICAqL1xuICBvblVubG9hZCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiBQYWdlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24tLUNhbGxlZCB3aGVuIHVzZXIgZHJvcCBkb3duXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBwYWdlIHJlYWNoIGJvdHRvbVxuICAgKi9cbiAgb25SZWFjaEJvdHRvbSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB1c2VyIGNsaWNrIG9uIHRoZSB0b3AgcmlnaHQgY29ybmVyIHRvIHNoYXJlXG4gICAqL1xuICAvLyBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24gKCkge1xuXG4gIC8vIH1cbn0pIl19