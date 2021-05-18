"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var myEventsApp = getApp();
Page({
    data: {
        signedUpEvents: [],
        selectedEvent: 0,
        tips: 'Please wait ...',
        loadingData: true,
        animated: true,
    },
    onLoad: function () {
        return __awaiter(this, void 0, void 0, function () {
            var that;
            return __generator(this, function (_a) {
                that = this;
                that.setData({
                    slideButtons: [{
                            type: 'warn',
                            text: 'cancel reservation',
                            src: '/images/cross_pink.png',
                        }],
                    loadingData: true,
                });
                return [2];
            });
        });
    },
    onReady: function () {
    },
    onShow: function () {
        return __awaiter(this, void 0, void 0, function () {
            var that, signedUpEventNames, signedUpEvents;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        that = this;
                        if (typeof this.getTabBar === 'function' &&
                            this.getTabBar()) {
                            this.getTabBar().setData({
                                selected: 1
                            });
                        }
                        that.setData({
                            loadingData: true,
                        });
                        return [4, myEventsApp.loadUserSignedUpEvents()];
                    case 1:
                        signedUpEventNames = _a.sent();
                        signedUpEvents = myEventsApp.globalData.currentEvents.filter(function (event) { return signedUpEventNames.includes(event.name); });
                        that.setData({
                            signedUpEvents: signedUpEvents,
                            loadingData: false,
                        });
                        return [2];
                }
            });
        });
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
    slideButtonTap: function (e) {
        var that = this;
        that.setData({
            loadingData: true,
        });
        var eventNumber = e.currentTarget.dataset.index;
        var event = that.data.signedUpEvents[eventNumber];
        var userOpenId = myEventsApp.globalData.userOpenId;
        wx.cloud.callFunction({
            name: "cancelSignup",
            data: {
                userOpenId: userOpenId,
                eventName: event.name,
            },
            success: function () {
                wx.showToast({
                    title: 'Canceled!',
                    icon: 'success',
                    duration: 2000
                });
                that.setData({
                    signedUpEvents: that.data.signedUpEvents.filter(function (_, i) { return i !== eventNumber; })
                });
                that.setData({
                    loadingData: false,
                });
            }
        });
    },
    viewEventDetail: function (e) {
        this.setData({
            selectedEvent: e.currentTarget.dataset.index
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLElBQU0sV0FBVyxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBRTdCLElBQUksQ0FBQztJQUlILElBQUksRUFBRTtRQUNKLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLGFBQWEsRUFBRSxDQUFDO1FBQ2hCLElBQUksRUFBRSxpQkFBaUI7UUFDdkIsV0FBVyxFQUFFLElBQUk7UUFDakIsUUFBUSxFQUFFLElBQUk7S0FDZjtJQUtELE1BQU0sRUFBRTs7OztnQkFDQSxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUlsQixJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFlBQVksRUFBRSxDQUFDOzRCQUNiLElBQUksRUFBRSxNQUFNOzRCQUNaLElBQUksRUFBRSxvQkFBb0I7NEJBQzFCLEdBQUcsRUFBRSx3QkFBd0I7eUJBQzlCLENBQUM7b0JBQ0YsV0FBVyxFQUFFLElBQUk7aUJBQ2xCLENBQUMsQ0FBQzs7OztLQUNKO0lBS0QsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUtELE1BQU0sRUFBRTs7Ozs7O3dCQUNBLElBQUksR0FBRyxJQUFJLENBQUM7d0JBQ2xCLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVU7NEJBQ3RDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTs0QkFDbEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQ0FDdkIsUUFBUSxFQUFFLENBQUM7NkJBQ1osQ0FBQyxDQUFBO3lCQUNIO3dCQUlELElBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ1gsV0FBVyxFQUFFLElBQUk7eUJBQ2xCLENBQUMsQ0FBQzt3QkFDd0IsV0FBTSxXQUFXLENBQUMsc0JBQXNCLEVBQUUsRUFBQTs7d0JBQS9ELGtCQUFrQixHQUFHLFNBQTBDO3dCQUMvRCxjQUFjLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBYSxJQUFLLE9BQUEsa0JBQWtCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQyxDQUFDO3dCQUUvSCxJQUFJLENBQUMsT0FBTyxDQUFDOzRCQUNYLGNBQWMsZ0JBQUE7NEJBQ2QsV0FBVyxFQUFFLEtBQUs7eUJBQ25CLENBQUMsQ0FBQzs7Ozs7S0FDSjtJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUtELGFBQWEsRUFBRTtJQUVmLENBQUM7SUFVRCxjQUFjLEVBQUUsVUFBVSxDQUFNO1FBQzlCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFBO1FBRUYsSUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ2xELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBVyxDQUFDO1FBQzlELElBQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBRXJELEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQ3BCLElBQUksRUFBRSxjQUFjO1lBQ3BCLElBQUksRUFBRTtnQkFDSixVQUFVLFlBQUE7Z0JBQ1YsU0FBUyxFQUFFLEtBQUssQ0FBQyxJQUFJO2FBQ3RCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1gsS0FBSyxFQUFFLFdBQVc7b0JBQ2xCLElBQUksRUFBRSxTQUFTO29CQUNmLFFBQVEsRUFBRSxJQUFJO2lCQUNmLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLGNBQWMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxLQUFLLFdBQVcsRUFBakIsQ0FBaUIsQ0FBQztpQkFDN0UsQ0FBQyxDQUFBO2dCQUNGLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsV0FBVyxFQUFFLEtBQUs7aUJBQ25CLENBQUMsQ0FBQTtZQUNKLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsZUFBZSxFQUFFLFVBQVUsQ0FBTTtRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsYUFBYSxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUs7U0FDN0MsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1pbmlwcm9ncmFtL3BhZ2VzL215RXZlbnRzL2luZGV4LnRzXG5cbmltcG9ydCB7IElFdmVudCB9IGZyb20gXCIuLi8uLi9hcHBcIjtcblxuY29uc3QgbXlFdmVudHNBcHAgPSBnZXRBcHAoKTtcblxuUGFnZSh7XG4gIC8qKlxuICAgKiBQYWdlIGluaXRpYWwgZGF0YVxuICAgKi9cbiAgZGF0YToge1xuICAgIHNpZ25lZFVwRXZlbnRzOiBbXSxcbiAgICBzZWxlY3RlZEV2ZW50OiAwLFxuICAgIHRpcHM6ICdQbGVhc2Ugd2FpdCAuLi4nLFxuICAgIGxvYWRpbmdEYXRhOiB0cnVlLFxuICAgIGFuaW1hdGVkOiB0cnVlLFxuICB9LFxuXG4gIC8qKlxuICAgKiBMaWZlY3ljbGUgZnVuY3Rpb24tLUNhbGxlZCB3aGVuIHBhZ2UgbG9hZFxuICAgKi9cbiAgb25Mb2FkOiBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgLyoqXG4gICAgICogU2V0IHNsaWRlIGJhciBpY29uc1xuICAgICAqL1xuICAgIHRoYXQuc2V0RGF0YSh7XG4gICAgICBzbGlkZUJ1dHRvbnM6IFt7XG4gICAgICAgIHR5cGU6ICd3YXJuJyxcbiAgICAgICAgdGV4dDogJ2NhbmNlbCByZXNlcnZhdGlvbicsXG4gICAgICAgIHNyYzogJy9pbWFnZXMvY3Jvc3NfcGluay5wbmcnLFxuICAgICAgfV0sXG4gICAgICBsb2FkaW5nRGF0YTogdHJ1ZSxcbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiBwYWdlIGlzIGluaXRpYWxseSByZW5kZXJlZFxuICAgKi9cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIExpZmVjeWNsZSBmdW5jdGlvbi0tQ2FsbGVkIHdoZW4gcGFnZSBzaG93XG4gICAqL1xuICBvblNob3c6IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBpZiAodHlwZW9mIHRoaXMuZ2V0VGFiQmFyID09PSAnZnVuY3Rpb24nICYmXG4gICAgICB0aGlzLmdldFRhYkJhcigpKSB7XG4gICAgICB0aGlzLmdldFRhYkJhcigpLnNldERhdGEoe1xuICAgICAgICBzZWxlY3RlZDogMVxuICAgICAgfSlcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHdoYXQgdGhlIHVzZXIgc2lnbmVkIHVwXG4gICAgICovXG4gICAgdGhhdC5zZXREYXRhKHtcbiAgICAgIGxvYWRpbmdEYXRhOiB0cnVlLFxuICAgIH0pO1xuICAgIGNvbnN0IHNpZ25lZFVwRXZlbnROYW1lcyA9IGF3YWl0IG15RXZlbnRzQXBwLmxvYWRVc2VyU2lnbmVkVXBFdmVudHMoKTtcbiAgICBjb25zdCBzaWduZWRVcEV2ZW50cyA9IG15RXZlbnRzQXBwLmdsb2JhbERhdGEuY3VycmVudEV2ZW50cy5maWx0ZXIoKGV2ZW50OiBJRXZlbnQpID0+IHNpZ25lZFVwRXZlbnROYW1lcy5pbmNsdWRlcyhldmVudC5uYW1lKSk7XG5cbiAgICB0aGF0LnNldERhdGEoe1xuICAgICAgc2lnbmVkVXBFdmVudHMsXG4gICAgICBsb2FkaW5nRGF0YTogZmFsc2UsXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIExpZmVjeWNsZSBmdW5jdGlvbi0tQ2FsbGVkIHdoZW4gcGFnZSBoaWRlXG4gICAqL1xuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiBMaWZlY3ljbGUgZnVuY3Rpb24tLUNhbGxlZCB3aGVuIHBhZ2UgdW5sb2FkXG4gICAqL1xuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIFBhZ2UgZXZlbnQgaGFuZGxlciBmdW5jdGlvbi0tQ2FsbGVkIHdoZW4gdXNlciBkcm9wIGRvd25cbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gcGFnZSByZWFjaCBib3R0b21cbiAgICovXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB1c2VyIGNsaWNrIG9uIHRoZSB0b3AgcmlnaHQgY29ybmVyIHRvIHNoYXJlXG4gICAqL1xuICAvLyBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24gKCkge1xuXG4gIC8vIH0sXG5cbiAgLy8gVXNlIGFueSBhcyB0eXBlIGZvciBub3c7IGFzIG9mZmljaWFsIHR5cGluZyBkb2VzIG5vdCBpbmNsdWRlIGV2ZW50IHR5cGUgeWV0XG4gIHNsaWRlQnV0dG9uVGFwOiBmdW5jdGlvbiAoZTogYW55KSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgdGhhdC5zZXREYXRhKHtcbiAgICAgIGxvYWRpbmdEYXRhOiB0cnVlLFxuICAgIH0pXG5cbiAgICBjb25zdCBldmVudE51bWJlciA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgIGNvbnN0IGV2ZW50ID0gdGhhdC5kYXRhLnNpZ25lZFVwRXZlbnRzW2V2ZW50TnVtYmVyXSBhcyBJRXZlbnQ7XG4gICAgY29uc3QgdXNlck9wZW5JZCA9IG15RXZlbnRzQXBwLmdsb2JhbERhdGEudXNlck9wZW5JZDtcblxuICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XG4gICAgICBuYW1lOiBcImNhbmNlbFNpZ251cFwiLFxuICAgICAgZGF0YToge1xuICAgICAgICB1c2VyT3BlbklkLFxuICAgICAgICBldmVudE5hbWU6IGV2ZW50Lm5hbWUsXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAnQ2FuY2VsZWQhJyxcbiAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgfSk7XG4gICAgICAgIHRoYXQuc2V0RGF0YSh7XG4gICAgICAgICAgc2lnbmVkVXBFdmVudHM6IHRoYXQuZGF0YS5zaWduZWRVcEV2ZW50cy5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGV2ZW50TnVtYmVyKVxuICAgICAgICB9KVxuICAgICAgICB0aGF0LnNldERhdGEoe1xuICAgICAgICAgIGxvYWRpbmdEYXRhOiBmYWxzZSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICAvLyBVc2UgYW55IGFzIHR5cGUgZm9yIG5vdzsgYXMgb2ZmaWNpYWwgdHlwaW5nIGRvZXMgbm90IGluY2x1ZGUgZXZlbnQgdHlwZSB5ZXRcbiAgdmlld0V2ZW50RGV0YWlsOiBmdW5jdGlvbiAoZTogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHNlbGVjdGVkRXZlbnQ6IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgfSlcbiAgfVxufSkiXX0=