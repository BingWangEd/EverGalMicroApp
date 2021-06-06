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
            selectedEventId: 1,
            selectedEventName: '',
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
        var _b;
        var eventId = Number(e.detail.value);
        var eventName = (_b = this.data.currentEvents) === null || _b === void 0 ? void 0 : _b.find(function (event) { return event.id === eventId; });
        this.setData((_a = {},
            _a["formData.selectedEventId"] = eventId,
            _a["formData.selectedEventName"] = eventName,
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
            if (!valid) {
                var firstError = Object.keys(errors);
                if (firstError.length) {
                    _this.setData({
                        error: errors[firstError[0]].message
                    });
                }
            }
            else {
                var _a = _this.data.formData, name = _a.name, selectedEventName = _a.selectedEventName, selectedEventId = _a.selectedEventId, email = _a.email, mobile = _a.mobile;
                wx.showToast({
                    title: 'Thank you~'
                });
                wx.cloud.callFunction({
                    name: "signUp",
                    data: {
                        eventId: selectedEventId,
                        event: selectedEventName,
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
        var event = ((_b = this.data) === null || _b === void 0 ? void 0 : _b.currentEvents) && this.data.currentEvents.find(function (event) { return event.id === _this.data.formData.selectedEventId; });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLElBQU0sYUFBYSxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBc0IvQixJQUFJLENBQUM7SUFJSCxJQUFJLEVBQUU7UUFDSixZQUFZLEVBQUU7WUFDWixFQUFFLEVBQUU7Z0JBQ0YsV0FBVyxFQUFFLHdDQUF3QztnQkFDckQsS0FBSyxFQUFFLGtDQUFrQztnQkFDekMsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLE9BQU8sRUFBRTtvQkFDUCxLQUFLLEVBQUUsU0FBUztvQkFDaEIsSUFBSSxFQUFFLE1BQU07b0JBQ1osTUFBTSxFQUFFLFFBQVE7b0JBQ2hCLEtBQUssRUFBRSxPQUFPO29CQUNkLE1BQU0sRUFBRSxrREFBa0Q7aUJBQzNEO2FBQ0Y7WUFDRCxFQUFFLEVBQUUsRUFFSDtZQUNELEVBQUUsRUFBRSxFQUVIO1NBQ0Y7UUFDRCxRQUFRLEVBQUU7WUFDUixlQUFlLEVBQUUsQ0FBQztZQUNsQixpQkFBaUIsRUFBRSxFQUFFO1NBQ3RCO1FBQ0QsS0FBSyxFQUFFO1lBQ0w7Z0JBQ0UsSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCLEtBQUssRUFBRTtvQkFDTCxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLDZDQUE2QyxFQUFDO2lCQUN6RTthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFO29CQUNMLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUM7aUJBQ3hEO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUU7b0JBQ0wsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxxQ0FBcUMsRUFBQztpQkFFakU7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRTtvQkFDTCxFQUFFLFFB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YUFBYSxLQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQWEsSUFBSyxPQUFBLEtBQUssQ0FBQyxFQUFFLEtBQUssS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUEvQyxDQUErQyxDQUFDLENBQUM7UUFFM0ksSUFBSSxDQUFDLE9BQU87WUFDVixHQUFDLGdDQUFnQyxJQUFHLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxRQUFRO1lBQ25ELEdBQUMsNEJBQTRCLElBQUcsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFFBQVE7Z0JBQy9DLENBQUM7SUFDTCxDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO0lBRWIsQ0FBQztDQVFGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL3NpZ251cEZvcm0vaW5kZXgudHNcblxuaW1wb3J0IHsgSUV2ZW50IH0gZnJvbSBcIi4uLy4uL2FwcFwiO1xuXG5jb25zdCBzaWdudXBGb3JtQXBwID0gZ2V0QXBwKCk7XG5cbmludGVyZmFjZSBJU2lnblVwRm9ybVBhZ2VEYXRhIHtcbiAgaW5zdHJ1Y3Rpb25zOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxuICBjdXJyZW50RXZlbnRzPzogSUV2ZW50W10sXG4gIGZvcm1EYXRhOiB7XG4gICAgc2VsZWN0ZWRFdmVudElkOiBudW1iZXIsXG4gICAgc2VsZWN0ZWRFdmVudE5hbWU6IHN0cmluZyxcbiAgICBuYW1lPzogc3RyaW5nLFxuICAgIG1vYmlsZT86IHN0cmluZyxcbiAgICBlbWFpbD86IHN0cmluZyxcbiAgICBvdGhlcj86IHN0cmluZyxcbiAgfSxcbiAgcnVsZXM6ICh7XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHJ1bGVzOiAoe1xuICAgICAgcmVxdWlyZWQ6IGJvb2xlYW4sXG4gICAgICBtZXNzYWdlOiBzdHJpbmdcbiAgICB9KVtdXG4gIH0pW10sXG59XG5cblBhZ2Uoe1xuICAvKipcbiAgICogUGFnZSBpbml0aWFsIGRhdGFcbiAgICovXG4gIGRhdGE6IHtcbiAgICBpbnN0cnVjdGlvbnM6IHsgXG4gICAgICBlbjoge1xuICAgICAgICBzZWxlY3RFdmVudDogXCJTZWxlY3QgYW4gZXZlbnQgeW91IHdvdWxkIGxpa2UgdG8gam9pblwiLFxuICAgICAgICBvdGhlcjogXCJBbnkgb3RoZXIgcXVlc3Rpb25zIG9yIGNvbmNlcm5zP1wiLFxuICAgICAgICBzaWduVXA6IFwiU2lnbiB1cFwiLFxuICAgICAgICBjb250YWN0OiB7XG4gICAgICAgICAgdGl0bGU6ICdDb250YWN0JyxcbiAgICAgICAgICBuYW1lOiAnTmFtZScsXG4gICAgICAgICAgbW9iaWxlOiAnTW9iaWxlJyxcbiAgICAgICAgICBlbWFpbDogJ0VtYWlsJyxcbiAgICAgICAgICBmb290ZXI6ICdXZVxcJ2xsIG9ubHkgY29udGFjdCB5b3UgYWJvdXQgZXZlbnQtcmVsYXRlZCBpbmZvJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBjaDoge1xuXG4gICAgICB9LFxuICAgICAganA6IHtcblxuICAgICAgfVxuICAgIH0sXG4gICAgZm9ybURhdGE6IHtcbiAgICAgIHNlbGVjdGVkRXZlbnRJZDogMSxcbiAgICAgIHNlbGVjdGVkRXZlbnROYW1lOiAnJyxcbiAgICB9LFxuICAgIHJ1bGVzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdzZWxlY3RlZEV2ZW50JyxcbiAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICB7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2Ugc2VsZWN0IGFuIGV2ZW50IHlvdVxcJ2QgbGlrZSB0byBqb2luLid9XG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAge3JlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGZpbGwgb3V0IHlvdXIgbmFtZS4nfVxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ21vYmlsZScsXG4gICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAge3JlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGZpbGwgb3V0IHlvdXIgbW9iaWxlIG51bWJlci4nfSxcbiAgICAgICAgICAvLyB7IG1vYmlsZTogdHJ1ZSwgbWVzc2FnZTogJ1RoZSBmb3JtYXQgaXMgbm90IGNvcnJlY3QuJyB9XG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnZW1haWwnLFxuICAgICAgICBydWxlczogW1xuICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgZmlsbCBvdXQgeW91ciBlbWFpbC4nIH0sXG4gICAgICAgICAgLy8geyBlbWFpbDogdHJ1ZSwgbWVzc2FnZTogJ1RoZSBmb3JtYXQgaXMgbm90IGNvcnJlY3QuJyB9XG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF1cbiAgfSBhcyBJU2lnblVwRm9ybVBhZ2VEYXRhLFxuXG4gIC8vIGZ1bmN0aW9uc1xuICByYWRpb0NoYW5nZTogZnVuY3Rpb24gKGU6IGFueSkge1xuICAgIGNvbnN0IGV2ZW50SWQgPSBOdW1iZXIoZS5kZXRhaWwudmFsdWUpO1xuICAgIGNvbnN0IGV2ZW50TmFtZSA9IHRoaXMuZGF0YS5jdXJyZW50RXZlbnRzPy5maW5kKChldmVudDogSUV2ZW50KSA9PiBldmVudC5pZCA9PT0gZXZlbnRJZCk7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIFtgZm9ybURhdGEuc2VsZWN0ZWRFdmVudElkYF06IGV2ZW50SWQsXG4gICAgICBbYGZvcm1EYXRhLnNlbGVjdGVkRXZlbnROYW1lYF06IGV2ZW50TmFtZSxcbiAgICB9KTtcbiAgICB0aGlzLnJlc2V0RXZlbnREZXRhaWxzKCk7XG4gIH0sXG5cbiAgY29udGFjdElucHV0Q2hhbmdlKGU6IGFueSkge1xuICAgIGNvbnN0IHtmaWVsZH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBbYGZvcm1EYXRhLiR7ZmllbGR9YF06IGUuZGV0YWlsLnZhbHVlXG4gICAgfSk7XG4gIH0sXG5cbiAgbmFtZUlucHV0Q2hhbmdlOiBmdW5jdGlvbiAoZTogYW55KSB7XG4gICAgY29uc3Qge2ZpZWxkfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIFtgZm9ybURhdGEuJHtmaWVsZH1gXTogZS5kZXRhaWwudmFsdWVcbiAgICB9KTtcbiAgfSxcblxuICBvdGhlcklucHV0Q2hhbmdlOiBmdW5jdGlvbiAoZTogYW55KSB7XG4gICAgY29uc3Qge2ZpZWxkfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIFtgZm9ybURhdGEuJHtmaWVsZH1gXTogZS5kZXRhaWwudmFsdWVcbiAgICB9KTtcbiAgfSxcblxuICBzdWJtaXRGb3JtOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNmb3JtJykudmFsaWRhdGUoKHZhbGlkOiBib29sZWFuLCBlcnJvcnM6IGFueSkgPT4ge1xuICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICBjb25zdCBmaXJzdEVycm9yID0gT2JqZWN0LmtleXMoZXJyb3JzKVxuICAgICAgICBpZiAoZmlyc3RFcnJvci5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgZXJyb3I6IGVycm9yc1tmaXJzdEVycm9yWzBdXS5tZXNzYWdlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCBzZWxlY3RlZEV2ZW50TmFtZSwgc2VsZWN0ZWRFdmVudElkLCBlbWFpbCwgbW9iaWxlIH0gPSB0aGlzLmRhdGEuZm9ybURhdGE7XG5cbiAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAnVGhhbmsgeW91fidcbiAgICAgICAgfSlcbiAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcbiAgICAgICAgICBuYW1lOiBcInNpZ25VcFwiLCBcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBldmVudElkOiBzZWxlY3RlZEV2ZW50SWQsXG4gICAgICAgICAgICBldmVudDogc2VsZWN0ZWRFdmVudE5hbWUsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICBtb2JpbGUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAvLyBzZW5kIHNpZ25hbCB0byByZWxvYWQgc2lnbmVkIHVwIGV2ZW50c1xuICAgICAgICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL215RXZlbnRzL2luZGV4JyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiAoKSA9PiB7XG4gICAgXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgIFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiBwYWdlIGxvYWRcbiAgICovXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgIGxldCB1c2VyT3BlbklkID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJ1c2VyT3BlbklkXCIpO1xuICAgIGlmICghdXNlck9wZW5JZCkge1xuICAgICAgc2lnbnVwRm9ybUFwcC5sb2FkVXNlcklkKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBMaWZlY3ljbGUgZnVuY3Rpb24tLUNhbGxlZCB3aGVuIHBhZ2UgaXMgaW5pdGlhbGx5IHJlbmRlcmVkXG4gICAqL1xuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiBwYWdlIHNob3dcbiAgICovXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgdGhpcy5nZXRUYWJCYXIgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIHRoaXMuZ2V0VGFiQmFyKCkpIHtcbiAgICAgIHRoaXMuZ2V0VGFiQmFyKCkuc2V0RGF0YSh7XG4gICAgICAgIHNlbGVjdGVkOiAzXG4gICAgICB9KVxuICAgIH1cblxuICAgIGxldCBjdXJyZW50RXZlbnRzID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJjdXJyZW50RXZlbnRzXCIpO1xuICAgIGlmICghY3VycmVudEV2ZW50cykge1xuICAgICAgc2lnbnVwRm9ybUFwcC5sb2FkQ3VycmVudEV2ZW50cygpLnRoZW4oKHJlczogSUV2ZW50W10pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0xvYWRpbmcgc2lnbiB1cCBmb3JtLiBSZWNlaXZlZCBjdXJyZW50RXZlbnRzOiAnLCByZXMpO1xuICAgICAgICB0aGF0LnNldERhdGEoe1xuICAgICAgICAgIGN1cnJlbnRFdmVudHM6IHJlc1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5zZXREYXRhKHtcbiAgICAgICAgY3VycmVudEV2ZW50czogY3VycmVudEV2ZW50c1xuICAgICAgfSlcbiAgICB9XG4gICAgdGhpcy5yZXNldEV2ZW50RGV0YWlscygpO1xuICB9LFxuXG4gIHJlc2V0RXZlbnREZXRhaWxzOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZXZlbnQgPSB0aGlzLmRhdGE/LmN1cnJlbnRFdmVudHMgJiYgdGhpcy5kYXRhLmN1cnJlbnRFdmVudHMuZmluZCgoZXZlbnQ6IElFdmVudCkgPT4gZXZlbnQuaWQgPT09IHRoaXMuZGF0YS5mb3JtRGF0YS5zZWxlY3RlZEV2ZW50SWQpO1xuXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIFtgZm9ybURhdGEuc2VsZWN0ZWRFdmVudExvY2F0aW9uYF06IGV2ZW50Py5sb2NhdGlvbixcbiAgICAgIFtgZm9ybURhdGEuc2VsZWN0ZWRFdmVudFRpbWVgXTogZXZlbnQ/LmRhdGVUaW1lLFxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBMaWZlY3ljbGUgZnVuY3Rpb24tLUNhbGxlZCB3aGVuIHBhZ2UgaGlkZVxuICAgKi9cbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiBwYWdlIHVubG9hZFxuICAgKi9cbiAgb25VbmxvYWQoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICogUGFnZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiB1c2VyIGRyb3AgZG93blxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gcGFnZSByZWFjaCBib3R0b21cbiAgICovXG4gIG9uUmVhY2hCb3R0b20oKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdXNlciBjbGljayBvbiB0aGUgdG9wIHJpZ2h0IGNvcm5lciB0byBzaGFyZVxuICAgKi9cbiAgLy8gb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uICgpIHtcblxuICAvLyB9XG59KSJdfQ==