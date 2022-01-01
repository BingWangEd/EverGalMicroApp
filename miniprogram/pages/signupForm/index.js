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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLElBQU0sYUFBYSxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBVy9CLElBQUksQ0FBQztJQUlILElBQUksRUFBRTtRQUNKLFlBQVksRUFBRTtZQUNaLEVBQUUsRUFBRTtnQkFDRixXQUFXLEVBQUUsd0NBQXdDO2dCQUNyRCxLQUFLLEVBQUUsa0NBQWtDO2dCQUN6QyxNQUFNLEVBQUUsU0FBUztnQkFDakIsT0FBTyxFQUFFO29CQUNQLEtBQUssRUFBRSxTQUFTO29CQUNoQixJQUFJLEVBQUUsTUFBTTtvQkFDWixNQUFNLEVBQUUsUUFBUTtvQkFDaEIsS0FBSyxFQUFFLE9BQU87b0JBQ2QsTUFBTSxFQUFFLGtEQUFrRDtpQkFDM0Q7YUFDRjtZQUNELEVBQUUsRUFBRSxFQUVIO1lBQ0QsRUFBRSxFQUFFLEVBRUg7U0FDRjtRQUNELFFBQVEsRUFBRTtZQUNSLGVBQWUsRUFBRSxDQUFDO1lBQ2xCLGlCQUFpQixFQUFFLEVBQUU7U0FDdEI7S0FDcUI7SUFNeEIsTUFBTSxFQUFFO1FBQ04sSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUtELE9BQU8sRUFBRTtJQUVULENBQUM7SUFLRCxNQUFNLEVBQUU7UUFDTixJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssVUFBVTtZQUN0QyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDdkIsUUFBUSxFQUFFLENBQUM7YUFDWixDQUFDLENBQUE7U0FDSDtRQUVELElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsQixhQUFhLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFhO2dCQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNuRSxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLGFBQWEsRUFBRSxHQUFHO2lCQUNuQixDQUFDLENBQUE7WUFDSixDQUFDLENBQUMsQ0FBQTtTQUNIO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLGFBQWEsRUFBRSxhQUFhO2FBQzdCLENBQUMsQ0FBQTtTQUNIO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGlCQUFpQixFQUFFOztRQUFBLGlCQU9sQjs7UUFOQyxJQUFNLEtBQUssR0FBRyxDQUFBLE1BQUEsSUFBSSxDQUFDLElBQUksMENBQUUsYUFBYSxLQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQWEsSUFBSyxPQUFBLEtBQUssQ0FBQyxFQUFFLEtBQUssS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUEvQyxDQUErQyxDQUFDLENBQUM7UUFFM0ksSUFBSSxDQUFDLE9BQU87WUFDVixHQUFDLGdDQUFnQyxJQUFHLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxRQUFRO1lBQ25ELEdBQUMsNEJBQTRCLElBQUcsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFFBQVE7Z0JBQy9DLENBQUM7SUFDTCxDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO0lBRWIsQ0FBQztDQVFGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL3NpZ251cEZvcm0vaW5kZXgudHNcbi8vIFRvIGRlbGV0ZVxuaW1wb3J0IHsgSUV2ZW50IH0gZnJvbSBcIi4uLy4uL2FwcFwiO1xuXG5jb25zdCBzaWdudXBGb3JtQXBwID0gZ2V0QXBwKCk7XG5cbmludGVyZmFjZSBJU2lnblVwRm9ybVBhZ2VEYXRhIHtcbiAgaW5zdHJ1Y3Rpb25zOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxuICBjdXJyZW50RXZlbnRzPzogSUV2ZW50W10sXG4gIGZvcm1EYXRhOiB7XG4gICAgc2VsZWN0ZWRFdmVudElkOiBudW1iZXIsXG4gICAgc2VsZWN0ZWRFdmVudE5hbWU6IHN0cmluZyxcbiAgfSxcbn1cblxuUGFnZSh7XG4gIC8qKlxuICAgKiBQYWdlIGluaXRpYWwgZGF0YVxuICAgKi9cbiAgZGF0YToge1xuICAgIGluc3RydWN0aW9uczogeyBcbiAgICAgIGVuOiB7XG4gICAgICAgIHNlbGVjdEV2ZW50OiBcIlNlbGVjdCBhbiBldmVudCB5b3Ugd291bGQgbGlrZSB0byBqb2luXCIsXG4gICAgICAgIG90aGVyOiBcIkFueSBvdGhlciBxdWVzdGlvbnMgb3IgY29uY2VybnM/XCIsXG4gICAgICAgIHNpZ25VcDogXCJTaWduIHVwXCIsXG4gICAgICAgIGNvbnRhY3Q6IHtcbiAgICAgICAgICB0aXRsZTogJ0NvbnRhY3QnLFxuICAgICAgICAgIG5hbWU6ICdOYW1lJyxcbiAgICAgICAgICBtb2JpbGU6ICdNb2JpbGUnLFxuICAgICAgICAgIGVtYWlsOiAnRW1haWwnLFxuICAgICAgICAgIGZvb3RlcjogJ1dlXFwnbGwgb25seSBjb250YWN0IHlvdSBhYm91dCBldmVudC1yZWxhdGVkIGluZm8nLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNoOiB7XG5cbiAgICAgIH0sXG4gICAgICBqcDoge1xuXG4gICAgICB9XG4gICAgfSxcbiAgICBmb3JtRGF0YToge1xuICAgICAgc2VsZWN0ZWRFdmVudElkOiAxLFxuICAgICAgc2VsZWN0ZWRFdmVudE5hbWU6ICcnLFxuICAgIH0sXG4gIH0gYXMgSVNpZ25VcEZvcm1QYWdlRGF0YSxcblxuICAvLyBmdW5jdGlvbnNcbiAgLyoqXG4gICAqIExpZmVjeWNsZSBmdW5jdGlvbi0tQ2FsbGVkIHdoZW4gcGFnZSBsb2FkXG4gICAqL1xuICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgdXNlck9wZW5JZCA9IHd4LmdldFN0b3JhZ2VTeW5jKFwidXNlck9wZW5JZFwiKTtcbiAgICBpZiAoIXVzZXJPcGVuSWQpIHtcbiAgICAgIHNpZ251cEZvcm1BcHAubG9hZFVzZXJJZCgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiBwYWdlIGlzIGluaXRpYWxseSByZW5kZXJlZFxuICAgKi9cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIExpZmVjeWNsZSBmdW5jdGlvbi0tQ2FsbGVkIHdoZW4gcGFnZSBzaG93XG4gICAqL1xuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBpZiAodHlwZW9mIHRoaXMuZ2V0VGFiQmFyID09PSAnZnVuY3Rpb24nICYmXG4gICAgICB0aGlzLmdldFRhYkJhcigpKSB7XG4gICAgICB0aGlzLmdldFRhYkJhcigpLnNldERhdGEoe1xuICAgICAgICBzZWxlY3RlZDogM1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBsZXQgY3VycmVudEV2ZW50cyA9IHd4LmdldFN0b3JhZ2VTeW5jKFwiY3VycmVudEV2ZW50c1wiKTtcbiAgICBpZiAoIWN1cnJlbnRFdmVudHMpIHtcbiAgICAgIHNpZ251cEZvcm1BcHAubG9hZEN1cnJlbnRFdmVudHMoKS50aGVuKChyZXM6IElFdmVudFtdKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2FkaW5nIHNpZ24gdXAgZm9ybS4gUmVjZWl2ZWQgY3VycmVudEV2ZW50czogJywgcmVzKTtcbiAgICAgICAgdGhhdC5zZXREYXRhKHtcbiAgICAgICAgICBjdXJyZW50RXZlbnRzOiByZXNcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuc2V0RGF0YSh7XG4gICAgICAgIGN1cnJlbnRFdmVudHM6IGN1cnJlbnRFdmVudHNcbiAgICAgIH0pXG4gICAgfVxuICAgIHRoaXMucmVzZXRFdmVudERldGFpbHMoKTtcbiAgfSxcblxuICByZXNldEV2ZW50RGV0YWlsczogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5kYXRhPy5jdXJyZW50RXZlbnRzICYmIHRoaXMuZGF0YS5jdXJyZW50RXZlbnRzLmZpbmQoKGV2ZW50OiBJRXZlbnQpID0+IGV2ZW50LmlkID09PSB0aGlzLmRhdGEuZm9ybURhdGEuc2VsZWN0ZWRFdmVudElkKTtcblxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBbYGZvcm1EYXRhLnNlbGVjdGVkRXZlbnRMb2NhdGlvbmBdOiBldmVudD8ubG9jYXRpb24sXG4gICAgICBbYGZvcm1EYXRhLnNlbGVjdGVkRXZlbnRUaW1lYF06IGV2ZW50Py5kYXRlVGltZSxcbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiBwYWdlIGhpZGVcbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIExpZmVjeWNsZSBmdW5jdGlvbi0tQ2FsbGVkIHdoZW4gcGFnZSB1bmxvYWRcbiAgICovXG4gIG9uVW5sb2FkKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIFBhZ2UgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi0tQ2FsbGVkIHdoZW4gdXNlciBkcm9wIGRvd25cbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHBhZ2UgcmVhY2ggYm90dG9tXG4gICAqL1xuICBvblJlYWNoQm90dG9tKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHVzZXIgY2xpY2sgb24gdGhlIHRvcCByaWdodCBjb3JuZXIgdG8gc2hhcmVcbiAgICovXG4gIC8vIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbiAoKSB7XG5cbiAgLy8gfVxufSkiXX0=