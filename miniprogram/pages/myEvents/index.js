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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLElBQU0sV0FBVyxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBRTdCLElBQUksQ0FBQztJQUlILElBQUksRUFBRTtRQUNKLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLGFBQWEsRUFBRSxDQUFDO1FBQ2hCLElBQUksRUFBRSxpQkFBaUI7UUFDdkIsV0FBVyxFQUFFLElBQUk7UUFDakIsUUFBUSxFQUFFLElBQUk7S0FDZjtJQUtELE1BQU0sRUFBRTtRQUlOLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxZQUFZLEVBQUUsQ0FBQztvQkFDYixJQUFJLEVBQUUsTUFBTTtvQkFDWixJQUFJLEVBQUUsb0JBQW9CO29CQUMxQixHQUFHLEVBQUUsd0JBQXdCO2lCQUM5QixDQUFDO1lBQ0YsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUtELE9BQU8sRUFBRTtJQUVULENBQUM7SUFLRCxNQUFNLEVBQUU7Ozs7Ozt3QkFDTixJQUFJLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxVQUFVOzRCQUN0QyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7NEJBQ2xCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0NBQ3ZCLFFBQVEsRUFBRSxDQUFDOzZCQUNaLENBQUMsQ0FBQTt5QkFDSDt3QkFJRCxJQUFJLENBQUMsT0FBTyxDQUFDOzRCQUNYLFdBQVcsRUFBRSxJQUFJO3lCQUNsQixDQUFDLENBQUM7d0JBQ3dCLFdBQU0sV0FBVyxDQUFDLHNCQUFzQixFQUFFLEVBQUE7O3dCQUEvRCxrQkFBa0IsR0FBRyxTQUEwQzt3QkFDL0QsY0FBYyxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEtBQWEsSUFBSyxPQUFBLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQXZDLENBQXVDLENBQUMsQ0FBQzt3QkFFL0gsSUFBSSxDQUFDLE9BQU8sQ0FBQzs0QkFDWCxjQUFjLGdCQUFBOzRCQUNkLFdBQVcsRUFBRSxLQUFLO3lCQUNuQixDQUFDLENBQUM7Ozs7O0tBQ0o7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFLRCxhQUFhLEVBQUU7SUFFZixDQUFDO0lBVUQsY0FBYyxFQUFFLFVBQVUsQ0FBTTtRQUM5QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQTtRQUVGLElBQU0sV0FBVyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNsRCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQVcsQ0FBQztRQUM5RCxJQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUVyRCxFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUNwQixJQUFJLEVBQUUsY0FBYztZQUNwQixJQUFJLEVBQUU7Z0JBQ0osVUFBVSxZQUFBO2dCQUNWLFNBQVMsRUFBRSxLQUFLLENBQUMsSUFBSTthQUN0QjtZQUNELE9BQU8sRUFBRTtnQkFDUCxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNYLEtBQUssRUFBRSxXQUFXO29CQUNsQixJQUFJLEVBQUUsU0FBUztvQkFDZixRQUFRLEVBQUUsSUFBSTtpQkFDZixDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxjQUFjLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsS0FBSyxXQUFXLEVBQWpCLENBQWlCLENBQUM7aUJBQzdFLENBQUMsQ0FBQTtnQkFDRixJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFdBQVcsRUFBRSxLQUFLO2lCQUNuQixDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELGVBQWUsRUFBRSxVQUFVLENBQU07UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLGFBQWEsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLO1NBQzdDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtaW5pcHJvZ3JhbS9wYWdlcy9teUV2ZW50cy9pbmRleC50c1xuXG5pbXBvcnQgeyBJRXZlbnQgfSBmcm9tIFwiLi4vLi4vYXBwXCI7XG5cbmNvbnN0IG15RXZlbnRzQXBwID0gZ2V0QXBwKCk7XG5cblBhZ2Uoe1xuICAvKipcbiAgICogUGFnZSBpbml0aWFsIGRhdGFcbiAgICovXG4gIGRhdGE6IHtcbiAgICBzaWduZWRVcEV2ZW50czogW10sXG4gICAgc2VsZWN0ZWRFdmVudDogMCxcbiAgICB0aXBzOiAnUGxlYXNlIHdhaXQgLi4uJyxcbiAgICBsb2FkaW5nRGF0YTogdHJ1ZSxcbiAgICBhbmltYXRlZDogdHJ1ZSxcbiAgfSxcblxuICAvKipcbiAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiBwYWdlIGxvYWRcbiAgICovXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIFNldCBzbGlkZSBiYXIgaWNvbnNcbiAgICAgKi9cbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgc2xpZGVCdXR0b25zOiBbe1xuICAgICAgICB0eXBlOiAnd2FybicsXG4gICAgICAgIHRleHQ6ICdjYW5jZWwgcmVzZXJ2YXRpb24nLFxuICAgICAgICBzcmM6ICcvaW1hZ2VzL2Nyb3NzX3BpbmsucG5nJyxcbiAgICAgIH1dLFxuICAgICAgbG9hZGluZ0RhdGE6IHRydWUsXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIExpZmVjeWNsZSBmdW5jdGlvbi0tQ2FsbGVkIHdoZW4gcGFnZSBpcyBpbml0aWFsbHkgcmVuZGVyZWRcbiAgICovXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiBMaWZlY3ljbGUgZnVuY3Rpb24tLUNhbGxlZCB3aGVuIHBhZ2Ugc2hvd1xuICAgKi9cbiAgb25TaG93OiBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmdldFRhYkJhciA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgdGhpcy5nZXRUYWJCYXIoKSkge1xuICAgICAgdGhpcy5nZXRUYWJCYXIoKS5zZXREYXRhKHtcbiAgICAgICAgc2VsZWN0ZWQ6IDFcbiAgICAgIH0pXG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB3aGF0IHRoZSB1c2VyIHNpZ25lZCB1cFxuICAgICAqL1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBsb2FkaW5nRGF0YTogdHJ1ZSxcbiAgICB9KTtcbiAgICBjb25zdCBzaWduZWRVcEV2ZW50TmFtZXMgPSBhd2FpdCBteUV2ZW50c0FwcC5sb2FkVXNlclNpZ25lZFVwRXZlbnRzKCk7XG4gICAgY29uc3Qgc2lnbmVkVXBFdmVudHMgPSBteUV2ZW50c0FwcC5nbG9iYWxEYXRhLmN1cnJlbnRFdmVudHMuZmlsdGVyKChldmVudDogSUV2ZW50KSA9PiBzaWduZWRVcEV2ZW50TmFtZXMuaW5jbHVkZXMoZXZlbnQubmFtZSkpO1xuXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHNpZ25lZFVwRXZlbnRzLFxuICAgICAgbG9hZGluZ0RhdGE6IGZhbHNlLFxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBMaWZlY3ljbGUgZnVuY3Rpb24tLUNhbGxlZCB3aGVuIHBhZ2UgaGlkZVxuICAgKi9cbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiBwYWdlIHVubG9hZFxuICAgKi9cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiBQYWdlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24tLUNhbGxlZCB3aGVuIHVzZXIgZHJvcCBkb3duXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHBhZ2UgcmVhY2ggYm90dG9tXG4gICAqL1xuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdXNlciBjbGljayBvbiB0aGUgdG9wIHJpZ2h0IGNvcm5lciB0byBzaGFyZVxuICAgKi9cbiAgLy8gb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uICgpIHtcblxuICAvLyB9LFxuXG4gIC8vIFVzZSBhbnkgYXMgdHlwZSBmb3Igbm93OyBhcyBvZmZpY2lhbCB0eXBpbmcgZG9lcyBub3QgaW5jbHVkZSBldmVudCB0eXBlIHlldFxuICBzbGlkZUJ1dHRvblRhcDogZnVuY3Rpb24gKGU6IGFueSkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIHRoYXQuc2V0RGF0YSh7XG4gICAgICBsb2FkaW5nRGF0YTogdHJ1ZSxcbiAgICB9KVxuXG4gICAgY29uc3QgZXZlbnROdW1iZXIgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICBjb25zdCBldmVudCA9IHRoYXQuZGF0YS5zaWduZWRVcEV2ZW50c1tldmVudE51bWJlcl0gYXMgSUV2ZW50O1xuICAgIGNvbnN0IHVzZXJPcGVuSWQgPSBteUV2ZW50c0FwcC5nbG9iYWxEYXRhLnVzZXJPcGVuSWQ7XG5cbiAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xuICAgICAgbmFtZTogXCJjYW5jZWxTaWdudXBcIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdXNlck9wZW5JZCxcbiAgICAgICAgZXZlbnROYW1lOiBldmVudC5uYW1lLFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ0NhbmNlbGVkIScsXG4gICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgIH0pO1xuICAgICAgICB0aGF0LnNldERhdGEoe1xuICAgICAgICAgIHNpZ25lZFVwRXZlbnRzOiB0aGF0LmRhdGEuc2lnbmVkVXBFdmVudHMuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBldmVudE51bWJlcilcbiAgICAgICAgfSlcbiAgICAgICAgdGhhdC5zZXREYXRhKHtcbiAgICAgICAgICBsb2FkaW5nRGF0YTogZmFsc2UsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLy8gVXNlIGFueSBhcyB0eXBlIGZvciBub3c7IGFzIG9mZmljaWFsIHR5cGluZyBkb2VzIG5vdCBpbmNsdWRlIGV2ZW50IHR5cGUgeWV0XG4gIHZpZXdFdmVudERldGFpbDogZnVuY3Rpb24gKGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBzZWxlY3RlZEV2ZW50OiBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgIH0pXG4gIH1cbn0pIl19