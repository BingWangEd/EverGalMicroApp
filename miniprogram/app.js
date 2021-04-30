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
var CONFIG = require('./config');
App({
    onLaunch: function () {
        if (!wx.cloud) {
            console.error('请使用 2.2.3 或以上的基础库以使用云能力');
        }
        else {
            wx.cloud.init({
                traceUser: true,
            });
        }
    },
    globalData: {
        currentEvents: undefined,
        userOpenId: undefined,
        userSignedUpEvents: undefined,
    },
    loadCurrentEvents: function () {
        var that = this;
        return new Promise(function (resolve, reject) {
            wx.cloud.callFunction({
                name: "getCurrentEvents",
                success: function (res) {
                    var _a;
                    if ((_a = res === null || res === void 0 ? void 0 : res.result) === null || _a === void 0 ? void 0 : _a.data) {
                        var currentEvents = res.result.data;
                        that.globalData.currentEvents = currentEvents;
                        wx.setStorageSync("currentEvents", currentEvents);
                        resolve(currentEvents);
                    }
                    else {
                        reject(res);
                    }
                },
                fail: function (err) {
                    reject(err);
                }
            });
        });
    },
    loadUserId: function () {
        var that = this;
        return new Promise(function (resolve, reject) {
            wx.login({
                success: function (res) {
                    if (res.code) {
                        wx.request({
                            url: 'https://api.weixin.qq.com/sns/jscode2session',
                            data: {
                                appid: CONFIG.APP_ID,
                                secret: CONFIG.SECRETE,
                                js_code: res.code,
                                grant_type: 'authorization_code'
                            },
                            method: "GET",
                            success: function (res) {
                                if (res.data.openid) {
                                    var userOpenId = res.data.openid;
                                    that.globalData.userOpenId = userOpenId;
                                    wx.setStorageSync("userOpenId", userOpenId);
                                    resolve(userOpenId);
                                }
                                else {
                                    reject('Received data does not include user open id');
                                }
                            },
                            fail: function (err) {
                                reject(err);
                            }
                        });
                    }
                    else {
                        reject('Received data does not include user code');
                    }
                }
            });
        });
    },
    loadUserSignedUpEvents: function () {
        return __awaiter(this, void 0, void 0, function () {
            var that, currentEvents, userOpenId, eventNames;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        that = this;
                        currentEvents = that.globalData.currentEvents;
                        if (!!currentEvents) return [3, 2];
                        return [4, that.loadCurrentEvents()];
                    case 1:
                        currentEvents = _a.sent();
                        that.globalData.currentEvents = currentEvents;
                        _a.label = 2;
                    case 2:
                        userOpenId = that.globalData.userOpenId;
                        if (!!userOpenId) return [3, 4];
                        return [4, that.loadUserId()];
                    case 3:
                        userOpenId = _a.sent();
                        that.globalData.userOpenId = userOpenId;
                        _a.label = 4;
                    case 4:
                        eventNames = currentEvents.map(function (event) { return event.name; });
                        return [2, new Promise(function (resolve, reject) {
                                wx.cloud.callFunction({
                                    name: "findSignedUpEvents",
                                    data: {
                                        userOpenId: userOpenId,
                                        eventNames: eventNames,
                                    },
                                    success: function (res) {
                                        if (res.result) {
                                            that.globalData.userSignedUpEvents = res.result;
                                            resolve(res.result);
                                        }
                                        else {
                                            reject('Cannot find userSignedUpEvents');
                                        }
                                    },
                                    fail: function (msg) {
                                        reject(msg);
                                    }
                                });
                            })];
                }
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUF3Qm5DLEdBQUcsQ0FBTztJQUNSLFFBQVEsRUFBRTtRQUNSLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFO1lBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO1NBQ3pDO2FBQU07WUFDTCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFNWixTQUFTLEVBQUUsSUFBSTthQUNoQixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFDRCxVQUFVLEVBQUU7UUFDVixhQUFhLEVBQUUsU0FBUztRQUN4QixVQUFVLEVBQUUsU0FBUztRQUNyQixrQkFBa0IsRUFBRSxTQUFTO0tBQzlCO0lBQ0QsaUJBQWlCLEVBQUU7UUFDakIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztnQkFDcEIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsT0FBTyxFQUFFLFVBQUMsR0FBUTs7b0JBQ2hCLElBQUksTUFBQSxHQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsTUFBTSwwQ0FBRSxJQUFJLEVBQUU7d0JBQ3JCLElBQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3dCQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7d0JBQzlDLEVBQUUsQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO3dCQUNsRCxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7cUJB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Q0FDZCxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7NENBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7eUNBQ3JCOzZDQUFNOzRDQUNMLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO3lDQUMxQztvQ0FDSCxDQUFDO29DQUNELElBQUksRUFBRSxVQUFDLEdBQUc7d0NBQ1IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29DQUNkLENBQUM7aUNBQ0YsQ0FBQyxDQUFDOzRCQUNMLENBQUMsQ0FBQyxFQUFDOzs7O0tBQ0o7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2FwcC5qc1xuY29uc3QgQ09ORklHID0gcmVxdWlyZSgnLi9jb25maWcnKTtcblxuaW50ZXJmYWNlIElFdmVudCB7XG4gIGRhdGVUaW1lOiBzdHJpbmcsXG4gIGhlYWRzdXA6IHN0cmluZ1tdLFxuICBpZDogbnVtYmVyLFxuICBsb2NhdGlvbjogc3RyaW5nLFxuICBtZWV0U3BvdDogc3RyaW5nLFxuICBuYW1lOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIElBcHAgZXh0ZW5kcyBJQXBwT3B0aW9uIHtcbiAgZ2xvYmFsRGF0YToge1xuICAgIHVzZXJJbmZvPzogV2VjaGF0TWluaXByb2dyYW0uVXNlckluZm8sXG4gICAgY3VycmVudEV2ZW50cz86IElFdmVudFtdXG4gICAgdXNlclNpZ25lZFVwRXZlbnRzPzogSUV2ZW50W10sXG4gICAgdXNlck9wZW5JZD86IHN0cmluZ1xuICB9LFxuICB1c2VySW5mb1JlYWR5Q2FsbGJhY2s/OiBXZWNoYXRNaW5pcHJvZ3JhbS5HZXRVc2VySW5mb1N1Y2Nlc3NDYWxsYmFjayxcbiAgbG9hZEN1cnJlbnRFdmVudHM6ICgpID0+IFByb21pc2U8SUV2ZW50W10+LFxuICBsb2FkVXNlcklkOiAoKSA9PiBQcm9taXNlPHN0cmluZz4sXG4gIGxvYWRVc2VyU2lnbmVkVXBFdmVudHM6ICgpID0+IFByb21pc2U8SUV2ZW50W10+LFxufVxuXG5BcHA8SUFwcD4oe1xuICBvbkxhdW5jaDogZnVuY3Rpb24gKCkge1xuICAgIGlmICghd3guY2xvdWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+ivt+S9v+eUqCAyLjIuMyDmiJbku6XkuIrnmoTln7rnoYDlupPku6Xkvb/nlKjkupHog73lipsnKVxuICAgIH0gZWxzZSB7XG4gICAgICB3eC5jbG91ZC5pbml0KHtcbiAgICAgICAgLy8gZW52IOWPguaVsOivtOaYju+8mlxuICAgICAgICAvLyAgIGVudiDlj4LmlbDlhrPlrprmjqXkuIvmnaXlsI/nqIvluo/lj5HotbfnmoTkupHlvIDlj5HosIPnlKjvvIh3eC5jbG91ZC54eHjvvInkvJrpu5jorqTor7fmsYLliLDlk6rkuKrkupHnjq/looPnmoTotYTmupBcbiAgICAgICAgLy8gICDmraTlpITor7floavlhaXnjq/looMgSUQsIOeOr+WigyBJRCDlj6/miZPlvIDkupHmjqfliLblj7Dmn6XnnItcbiAgICAgICAgLy8gICDlpoLkuI3loavliJnkvb/nlKjpu5jorqTnjq/looPvvIjnrKzkuIDkuKrliJvlu7rnmoTnjq/looPvvIlcbiAgICAgICAgLy8gZW52OiAnbXktZW52LWlkJyxcbiAgICAgICAgdHJhY2VVc2VyOiB0cnVlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sXG4gIGdsb2JhbERhdGE6IHtcbiAgICBjdXJyZW50RXZlbnRzOiB1bmRlZmluZWQsXG4gICAgdXNlck9wZW5JZDogdW5kZWZpbmVkLFxuICAgIHVzZXJTaWduZWRVcEV2ZW50czogdW5kZWZpbmVkLFxuICB9LFxuICBsb2FkQ3VycmVudEV2ZW50czogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xuICAgICAgICBuYW1lOiBcImdldEN1cnJlbnRFdmVudHNcIixcbiAgICAgICAgc3VjY2VzczogKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKHJlcz8ucmVzdWx0Py5kYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RXZlbnRzID0gcmVzLnJlc3VsdC5kYXRhO1xuICAgICAgICAgICAgdGhhdC5nbG9iYWxEYXRhLmN1cnJlbnRFdmVudHMgPSBjdXJyZW50RXZlbnRzO1xuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoXCJjdXJyZW50RXZlbnRzXCIsIGN1cnJlbnRFdmVudHMpO1xuICAgICAgICAgICAgcmVzb2x2ZShjdXJyZW50RXZlbnRzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KHJlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSk7XG4gIH0sXG4gIGxvYWRVc2VySWQ6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd3gubG9naW4oe1xuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgaWYgKHJlcy5jb2RlKSB7XG4gICAgICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkud2VpeGluLnFxLmNvbS9zbnMvanNjb2RlMnNlc3Npb24nLFxuICAgICAgICAgICAgICBkYXRhOntcbiAgICAgICAgICAgICAgICBhcHBpZDogQ09ORklHLkFQUF9JRCxcbiAgICAgICAgICAgICAgICBzZWNyZXQ6IENPTkZJRy5TRUNSRVRFLFxuICAgICAgICAgICAgICAgIGpzX2NvZGU6IHJlcy5jb2RlLFxuICAgICAgICAgICAgICAgIGdyYW50X3R5cGU6J2F1dGhvcml6YXRpb25fY29kZSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbWV0aG9kOlwiR0VUXCIsXG4gICAgICAgICAgICAgIHN1Y2Nlc3MocmVzOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEub3BlbmlkKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB1c2VyT3BlbklkID0gcmVzLmRhdGEub3BlbmlkO1xuICAgICAgICAgICAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJPcGVuSWQgPSB1c2VyT3BlbklkO1xuICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoXCJ1c2VyT3BlbklkXCIsIHVzZXJPcGVuSWQpO1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh1c2VyT3BlbklkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmVqZWN0KCdSZWNlaXZlZCBkYXRhIGRvZXMgbm90IGluY2x1ZGUgdXNlciBvcGVuIGlkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmYWlsKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdCgnUmVjZWl2ZWQgZGF0YSBkb2VzIG5vdCBpbmNsdWRlIHVzZXIgY29kZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuICBsb2FkVXNlclNpZ25lZFVwRXZlbnRzOiBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICAvKipcbiAgICAgKiBNYWtlIHN1cmUgY3VycmVudEV2ZW50cyBoYXZlIGJlZW4gbG9hZGVkXG4gICAgICovXG4gICAgbGV0IGN1cnJlbnRFdmVudHMgPSB0aGF0Lmdsb2JhbERhdGEuY3VycmVudEV2ZW50cztcbiAgICBpZiAoIWN1cnJlbnRFdmVudHMpIHtcbiAgICAgIGN1cnJlbnRFdmVudHMgPSBhd2FpdCB0aGF0LmxvYWRDdXJyZW50RXZlbnRzKCk7XG4gICAgICB0aGF0Lmdsb2JhbERhdGEuY3VycmVudEV2ZW50cyA9IGN1cnJlbnRFdmVudHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFrZSBzdXJlIGN1cnJlbnRFdmVudHMgaGF2ZSBiZWVuIGxvYWRlZFxuICAgICAqL1xuICAgIGxldCB1c2VyT3BlbklkID0gdGhhdC5nbG9iYWxEYXRhLnVzZXJPcGVuSWQ7XG4gICAgaWYgKCF1c2VyT3BlbklkKSB7XG4gICAgICB1c2VyT3BlbklkID0gYXdhaXQgdGhhdC5sb2FkVXNlcklkKCk7XG4gICAgICB0aGF0Lmdsb2JhbERhdGEudXNlck9wZW5JZCA9IHVzZXJPcGVuSWQ7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1ha2Ugc3VyZSBjdXJyZW50RXZlbnRzIGhhdmUgYmVlbiBsb2FkZWRcbiAgICAgKi9cbiAgICBjb25zdCBldmVudE5hbWVzID0gY3VycmVudEV2ZW50cy5tYXAoKGV2ZW50OiBJRXZlbnQpID0+IGV2ZW50Lm5hbWUpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xuICAgICAgICBuYW1lOiBcImZpbmRTaWduZWRVcEV2ZW50c1wiLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdXNlck9wZW5JZCxcbiAgICAgICAgICBldmVudE5hbWVzLFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiAocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAocmVzLnJlc3VsdCkge1xuICAgICAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJTaWduZWRVcEV2ZW50cyA9IHJlcy5yZXN1bHQ7XG4gICAgICAgICAgICByZXNvbHZlKHJlcy5yZXN1bHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoJ0Nhbm5vdCBmaW5kIHVzZXJTaWduZWRVcEV2ZW50cycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogKG1zZykgPT4ge1xuICAgICAgICAgIHJlamVjdChtc2cpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufSlcbiJdfQ==