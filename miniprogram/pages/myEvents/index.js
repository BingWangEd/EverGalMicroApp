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
        this.setData({
            slideButtons: [{
                    type: 'warn',
                    text: 'cancel reservation',
                    src: '/images/cross_pink.png',
                }],
            loadingData: true,
        });
    },
    onReady: function () {
    },
    onShow: function () {
        return __awaiter(this, void 0, void 0, function () {
            var signedUpEventNames, signedUpEvents;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof this.getTabBar === 'function' &&
                            this.getTabBar()) {
                            this.getTabBar().setData({
                                selected: 1
                            });
                        }
                        this.setData({
                            loadingData: true,
                        });
                        return [4, myEventsApp.loadUserSignedUpEvents()];
                    case 1:
                        signedUpEventNames = _a.sent();
                        signedUpEvents = myEventsApp.globalData.currentEvents.filter(function (event) { return signedUpEventNames.includes(event.name); });
                        this.setData({
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
                    signedUpEvents: that.data.signedUpEvents.filter(function (_, i) { return i !== eventNumber; }),
                    selectedEvent: 0
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLElBQU0sV0FBVyxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBRTdCLElBQUksQ0FBQztJQUlILElBQUksRUFBRTtRQUNKLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLGFBQWEsRUFBRSxDQUFDO1FBQ2hCLElBQUksRUFBRSxpQkFBaUI7UUFDdkIsV0FBVyxFQUFFLElBQUk7UUFDakIsUUFBUSxFQUFFLElBQUk7S0FDZjtJQUtELE1BQU0sRUFBRTtRQUlOLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxZQUFZLEVBQUUsQ0FBQztvQkFDYixJQUFJLEVBQUUsTUFBTTtvQkFDWixJQUFJLEVBQUUsb0JBQW9CO29CQUMxQixHQUFHLEVBQUUsd0JBQXdCO2lCQUM5QixDQUFDO1lBQ0YsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUtELE9BQU8sRUFBRTtJQUVULENBQUM7SUFLRCxNQUFNLEVBQUU7Ozs7Ozt3QkFDTixJQUFJLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxVQUFVOzRCQUN0QyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7NEJBQ2xCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0NBQ3ZCLFFBQVEsRUFBRSxDQUFDOzZCQUNaLENBQUMsQ0FBQTt5QkFDSDt3QkFJRCxJQUFJLENBQUMsT0FBTyxDQUFDOzRCQUNYLFdBQVcsRUFBRSxJQUFJO3lCQUNsQixDQUFDLENBQUM7d0JBQ3dCLFdBQU0sV0FBVyxDQUFDLHNCQUFzQixFQUFFLEVBQUE7O3dCQUEvRCxrQkFBa0IsR0FBRyxTQUEwQzt3QkFDL0QsY0FBYyxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEtBQWEsSUFBSyxPQUFBLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQXZDLENBQXVDLENBQUMsQ0FBQzt3QkFFL0gsSUFBSSxDQUFDLE9BQU8sQ0FBQzs0QkFDWCxjQUFjLGdCQUFBOzRCQUNkLFdBQVcsRUFBRSxLQUFLO3lCQUNuQixDQUFDLENBQUM7Ozs7O0tBQ0o7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFLRCxhQUFhLEVBQUU7SUFFZixDQUFDO0lBVUQsY0FBYyxFQUFFLFVBQVUsQ0FBTTtRQUM5QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQTtRQUVGLElBQU0sV0FBVyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNsRCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQVcsQ0FBQztRQUM5RCxJQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUVyRCxFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUNwQixJQUFJLEVBQUUsY0FBYztZQUNwQixJQUFJLEVBQUU7Z0JBQ0osVUFBVSxZQUFBO2dCQUNWLFNBQVMsRUFBRSxLQUFLLENBQUMsSUFBSTthQUN0QjtZQUNELE9BQU8sRUFBRTtnQkFDUCxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNYLEtBQUssRUFBRSxXQUFXO29CQUNsQixJQUFJLEVBQUUsU0FBUztvQkFDZixRQUFRLEVBQUUsSUFBSTtpQkFDZixDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxjQUFjLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsS0FBSyxXQUFXLEVBQWpCLENBQWlCLENBQUM7b0JBQzVFLGFBQWEsRUFBRSxDQUFDO2lCQUNqQixDQUFDLENBQUE7Z0JBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxXQUFXLEVBQUUsS0FBSztpQkFDbkIsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxlQUFlLEVBQUUsVUFBVSxDQUFNO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxhQUFhLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSztTQUM3QyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbWluaXByb2dyYW0vcGFnZXMvbXlFdmVudHMvaW5kZXgudHNcblxuaW1wb3J0IHsgSUV2ZW50IH0gZnJvbSBcIi4uLy4uL2FwcFwiO1xuXG5jb25zdCBteUV2ZW50c0FwcCA9IGdldEFwcCgpO1xuXG5QYWdlKHtcbiAgLyoqXG4gICAqIFBhZ2UgaW5pdGlhbCBkYXRhXG4gICAqL1xuICBkYXRhOiB7XG4gICAgc2lnbmVkVXBFdmVudHM6IFtdLFxuICAgIHNlbGVjdGVkRXZlbnQ6IDAsXG4gICAgdGlwczogJ1BsZWFzZSB3YWl0IC4uLicsXG4gICAgbG9hZGluZ0RhdGE6IHRydWUsXG4gICAgYW5pbWF0ZWQ6IHRydWUsXG4gIH0sXG5cbiAgLyoqXG4gICAqIExpZmVjeWNsZSBmdW5jdGlvbi0tQ2FsbGVkIHdoZW4gcGFnZSBsb2FkXG4gICAqL1xuICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBTZXQgc2xpZGUgYmFyIGljb25zXG4gICAgICovXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHNsaWRlQnV0dG9uczogW3tcbiAgICAgICAgdHlwZTogJ3dhcm4nLFxuICAgICAgICB0ZXh0OiAnY2FuY2VsIHJlc2VydmF0aW9uJyxcbiAgICAgICAgc3JjOiAnL2ltYWdlcy9jcm9zc19waW5rLnBuZycsXG4gICAgICB9XSxcbiAgICAgIGxvYWRpbmdEYXRhOiB0cnVlLFxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBMaWZlY3ljbGUgZnVuY3Rpb24tLUNhbGxlZCB3aGVuIHBhZ2UgaXMgaW5pdGlhbGx5IHJlbmRlcmVkXG4gICAqL1xuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiBwYWdlIHNob3dcbiAgICovXG4gIG9uU2hvdzogYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5nZXRUYWJCYXIgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIHRoaXMuZ2V0VGFiQmFyKCkpIHtcbiAgICAgIHRoaXMuZ2V0VGFiQmFyKCkuc2V0RGF0YSh7XG4gICAgICAgIHNlbGVjdGVkOiAxXG4gICAgICB9KVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgd2hhdCB0aGUgdXNlciBzaWduZWQgdXBcbiAgICAgKi9cbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgbG9hZGluZ0RhdGE6IHRydWUsXG4gICAgfSk7XG4gICAgY29uc3Qgc2lnbmVkVXBFdmVudE5hbWVzID0gYXdhaXQgbXlFdmVudHNBcHAubG9hZFVzZXJTaWduZWRVcEV2ZW50cygpO1xuICAgIGNvbnN0IHNpZ25lZFVwRXZlbnRzID0gbXlFdmVudHNBcHAuZ2xvYmFsRGF0YS5jdXJyZW50RXZlbnRzLmZpbHRlcigoZXZlbnQ6IElFdmVudCkgPT4gc2lnbmVkVXBFdmVudE5hbWVzLmluY2x1ZGVzKGV2ZW50Lm5hbWUpKTtcblxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBzaWduZWRVcEV2ZW50cyxcbiAgICAgIGxvYWRpbmdEYXRhOiBmYWxzZSxcbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiBwYWdlIGhpZGVcbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIExpZmVjeWNsZSBmdW5jdGlvbi0tQ2FsbGVkIHdoZW4gcGFnZSB1bmxvYWRcbiAgICovXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICogUGFnZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiB1c2VyIGRyb3AgZG93blxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBwYWdlIHJlYWNoIGJvdHRvbVxuICAgKi9cbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHVzZXIgY2xpY2sgb24gdGhlIHRvcCByaWdodCBjb3JuZXIgdG8gc2hhcmVcbiAgICovXG4gIC8vIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbiAoKSB7XG5cbiAgLy8gfSxcblxuICAvLyBVc2UgYW55IGFzIHR5cGUgZm9yIG5vdzsgYXMgb2ZmaWNpYWwgdHlwaW5nIGRvZXMgbm90IGluY2x1ZGUgZXZlbnQgdHlwZSB5ZXRcbiAgc2xpZGVCdXR0b25UYXA6IGZ1bmN0aW9uIChlOiBhbnkpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICB0aGF0LnNldERhdGEoe1xuICAgICAgbG9hZGluZ0RhdGE6IHRydWUsXG4gICAgfSlcblxuICAgIGNvbnN0IGV2ZW50TnVtYmVyID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgY29uc3QgZXZlbnQgPSB0aGF0LmRhdGEuc2lnbmVkVXBFdmVudHNbZXZlbnROdW1iZXJdIGFzIElFdmVudDtcbiAgICBjb25zdCB1c2VyT3BlbklkID0gbXlFdmVudHNBcHAuZ2xvYmFsRGF0YS51c2VyT3BlbklkO1xuXG4gICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcbiAgICAgIG5hbWU6IFwiY2FuY2VsU2lnbnVwXCIsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHVzZXJPcGVuSWQsXG4gICAgICAgIGV2ZW50TmFtZTogZXZlbnQubmFtZSxcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICdDYW5jZWxlZCEnLFxuICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICB9KTtcbiAgICAgICAgdGhhdC5zZXREYXRhKHtcbiAgICAgICAgICBzaWduZWRVcEV2ZW50czogdGhhdC5kYXRhLnNpZ25lZFVwRXZlbnRzLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gZXZlbnROdW1iZXIpLFxuICAgICAgICAgIHNlbGVjdGVkRXZlbnQ6IDBcbiAgICAgICAgfSlcbiAgICAgICAgdGhhdC5zZXREYXRhKHtcbiAgICAgICAgICBsb2FkaW5nRGF0YTogZmFsc2UsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLy8gVXNlIGFueSBhcyB0eXBlIGZvciBub3c7IGFzIG9mZmljaWFsIHR5cGluZyBkb2VzIG5vdCBpbmNsdWRlIGV2ZW50IHR5cGUgeWV0XG4gIHZpZXdFdmVudERldGFpbDogZnVuY3Rpb24gKGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBzZWxlY3RlZEV2ZW50OiBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgIH0pXG4gIH1cbn0pIl19