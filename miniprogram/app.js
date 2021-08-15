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
exports.validateCurrentEventsDataFormat = exports.hasOwnProperty = void 0;
var f = require("fp-ts");
var CONFIG = require('./config');
var hasOwnProperty = function (obj, prop) {
    return obj.hasOwnProperty(prop);
};
exports.hasOwnProperty = hasOwnProperty;
var validateCurrentEventsDataFormat = function (data) {
    if (!Array.isArray(data)) {
        return f.either.left(new Error('Data is not array.'));
    }
    var currentEventKeys = ['dateTime', 'headsup', 'id', 'location', 'meetSpot', 'name'];
    data.forEach(function (ele) {
        Object.keys(currentEventKeys).forEach(function (key) {
            if (!exports.hasOwnProperty(ele, key)) {
                return f.either.left(new Error('Data is not array.'));
            }
        });
    });
    return f.either.right(data);
};
exports.validateCurrentEventsDataFormat = validateCurrentEventsDataFormat;
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
        wx.loadFontFace({
            family: 'Dosis',
            source: 'url("https://fonts.googleapis.com/css2?family=Dosis:wght@200&display=swap")',
            success: console.log,
            fail: console.log,
            complete: console.log
        });
    },
    globalData: {},
    loadCurrentEvents: function () {
        var that = this;
        return new Promise(function (resolve, reject) {
            wx.cloud.callFunction({
                name: "getCurrentEvents",
                success: function (res) {
                    var verifyCurrentEventsFromData = function (response) { return f.function.pipe(response, function (response) {
                        return response &&
                            typeof response === 'object' &&
                            exports.hasOwnProperty(response, 'result') &&
                            response.result &&
                            typeof response.result === 'object' &&
                            exports.hasOwnProperty(response.result, 'data') ?
                            f.either.right(response.result.data) : f.either.left(new Error('Data does not exist'));
                    }, f.either.chain(function (data) {
                        return exports.validateCurrentEventsDataFormat(data);
                    }), f.either.fold(function (error) { return reject(error); }, function (verifiedCurrentEvents) {
                        that.globalData.currentEvents = verifiedCurrentEvents;
                        wx.setStorageSync("currentEvents", verifiedCurrentEvents);
                        resolve(verifiedCurrentEvents);
                    })); };
                    verifyCurrentEventsFromData(res);
                },
                fail: function (error) {
                    reject(error);
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
                                var verifyOpenid = function (response) {
                                    f.function.pipe(response, function (response) {
                                        return response && typeof response === 'object' && exports.hasOwnProperty(response, 'data') &&
                                            response.data && typeof response.data === 'object' && exports.hasOwnProperty(response.data, 'openid') &&
                                            response.data.openid && typeof response.data.openid === 'string' ?
                                            f.either.right(response.data.openid) : f.either.left(new Error('Open id does not exist on response'));
                                    }, f.either.fold(function (error) { return reject(error); }, function (verifiedOpenid) {
                                        that.globalData.userOpenId = verifiedOpenid;
                                        wx.setStorageSync("userOpenId", verifiedOpenid);
                                        resolve(verifiedOpenid);
                                    }));
                                };
                                verifyOpenid(res);
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
                                        var verifyUserSignedUpEvents = function (response) {
                                            return f.function.pipe(response, function (response) {
                                                return response && typeof response === 'object' && exports.hasOwnProperty(response, 'result') ?
                                                    f.either.right(response.result) : f.either.left(new Error('Result does not exist'));
                                            }, f.either.chain(function (data) { return f.function.pipe(exports.validateCurrentEventsDataFormat(data)); }), f.either.fold(function (error) { return reject(error); }, function (verifiedUserSignedUpEvents) {
                                                that.globalData.userSignedUpEvents = verifiedUserSignedUpEvents;
                                                resolve(verifiedUserSignedUpEvents);
                                            }));
                                        };
                                        verifyUserSignedUpEvents(res);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlCQUEyQjtBQUUzQixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFhNUIsSUFBTSxjQUFjLEdBQUcsVUFBc0MsR0FBTSxFQUFFLElBQU87SUFDakYsT0FBTyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ2pDLENBQUMsQ0FBQTtBQUZZLFFBQUEsY0FBYyxrQkFFMUI7QUFFTSxJQUFNLCtCQUErQixHQUFHLFVBQUMsSUFBYTtJQUMzRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN4QixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQTtLQUN0RDtJQUVELElBQU0sZ0JBQWdCLEdBQUcsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZGLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7WUFDdkMsSUFBSSxDQUFDLHNCQUFjLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFO2dCQUM3QixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQTthQUN0RDtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7SUFFRixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQWdCLENBQUMsQ0FB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RUFBRSxVQUFDLEdBQUc7d0NBQ1IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29DQUNkLENBQUM7aUNBQ0YsQ0FBQyxDQUFDOzRCQUNMLENBQUMsQ0FBQyxFQUFDOzs7O0tBQ0o7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2FwcC50c1xuaW1wb3J0ICogYXMgZiBmcm9tIFwiZnAtdHNcIjtcblxuY29uc3QgQ09ORklHID0gcmVxdWlyZSgnLi9jb25maWcnKTtcblxuZXhwb3J0IGludGVyZmFjZSBJRXZlbnQge1xuICBkYXRlVGltZTogc3RyaW5nW10sIC8vIFttb250aCwgZGF0ZSwgeWVhciwgZGF5LCB0aW1lXVxuICBoZWFkc3VwOiBzdHJpbmdbXSxcbiAgaWQ6IG51bWJlcixcbiAgbG9jYXRpb246IHN0cmluZyxcbiAgbWVldFNwb3Q6IHN0cmluZyxcbiAgbmFtZTogc3RyaW5nLFxuICBpbWFnZUlkOiBzdHJpbmcsXG59XG5cbi8vIGh0dHBzOi8vZmV0dGJsb2cuZXUvdHlwZXNjcmlwdC1oYXNvd25wcm9wZXJ0eS9cbmV4cG9ydCBjb25zdCBoYXNPd25Qcm9wZXJ0eSA9IDxYIGV4dGVuZHMge30sIFkgZXh0ZW5kcyBQcm9wZXJ0eUtleT4ob2JqOiBYLCBwcm9wOiBZKTogb2JqIGlzIFggJiBSZWNvcmQ8WSwgdW5rbm93bj4gPT4ge1xuICByZXR1cm4gb2JqLmhhc093blByb3BlcnR5KHByb3ApXG59XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUN1cnJlbnRFdmVudHNEYXRhRm9ybWF0ID0gKGRhdGE6IHVua25vd24pOiBmLmVpdGhlci5FaXRoZXI8RXJyb3IsIElFdmVudFtdPiA9PiB7XG4gIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgIHJldHVybiBmLmVpdGhlci5sZWZ0KG5ldyBFcnJvcignRGF0YSBpcyBub3QgYXJyYXkuJykpXG4gIH1cblxuICBjb25zdCBjdXJyZW50RXZlbnRLZXlzID0gWydkYXRlVGltZScsICdoZWFkc3VwJywgJ2lkJywgJ2xvY2F0aW9uJywgJ21lZXRTcG90JywgJ25hbWUnXTtcbiAgZGF0YS5mb3JFYWNoKChlbGUpID0+IHtcbiAgICBPYmplY3Qua2V5cyhjdXJyZW50RXZlbnRLZXlzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAoIWhhc093blByb3BlcnR5KGVsZSwga2V5KSkge1xuICAgICAgICByZXR1cm4gZi5laXRoZXIubGVmdChuZXcgRXJyb3IoJ0RhdGEgaXMgbm90IGFycmF5LicpKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG5cbiAgcmV0dXJuIGYuZWl0aGVyLnJpZ2h0KGRhdGEgYXMgSUV2ZW50W10pO1xufTtcblxuaW50ZXJmYWNlIElBcHAgZXh0ZW5kcyBJQXBwT3B0aW9uIHtcbiAgZ2xvYmFsRGF0YToge1xuICAgIHVzZXJJbmZvPzogV2VjaGF0TWluaXByb2dyYW0uVXNlckluZm8sXG4gICAgY3VycmVudEV2ZW50cz86IElFdmVudFtdXG4gICAgdXNlclNpZ25lZFVwRXZlbnRzPzogSUV2ZW50W10sXG4gICAgdXNlck9wZW5JZD86IHN0cmluZ1xuICB9LFxuICB1c2VySW5mb1JlYWR5Q2FsbGJhY2s/OiBXZWNoYXRNaW5pcHJvZ3JhbS5HZXRVc2VySW5mb1N1Y2Nlc3NDYWxsYmFjayxcbiAgbG9hZEN1cnJlbnRFdmVudHM6ICgpID0+IFByb21pc2U8SUV2ZW50W10+LFxuICBsb2FkVXNlcklkOiAoKSA9PiBQcm9taXNlPHN0cmluZz4sXG4gIGxvYWRVc2VyU2lnbmVkVXBFdmVudHM6ICgpID0+IFByb21pc2U8SUV2ZW50W10+LFxufVxuXG5BcHA8SUFwcD4oe1xuICBvbkxhdW5jaDogZnVuY3Rpb24gKCkge1xuICAgIGlmICghd3guY2xvdWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+ivt+S9v+eUqCAyLjIuMyDmiJbku6XkuIrnmoTln7rnoYDlupPku6Xkvb/nlKjkupHog73lipsnKVxuICAgIH0gZWxzZSB7XG4gICAgICB3eC5jbG91ZC5pbml0KHtcbiAgICAgICAgLy8gZW52IOWPguaVsOivtOaYju+8mlxuICAgICAgICAvLyAgIGVudiDlj4LmlbDlhrPlrprmjqXkuIvmnaXlsI/nqIvluo/lj5HotbfnmoTkupHlvIDlj5HosIPnlKjvvIh3eC5jbG91ZC54eHjvvInkvJrpu5jorqTor7fmsYLliLDlk6rkuKrkupHnjq/looPnmoTotYTmupBcbiAgICAgICAgLy8gICDmraTlpITor7floavlhaXnjq/looMgSUQsIOeOr+WigyBJRCDlj6/miZPlvIDkupHmjqfliLblj7Dmn6XnnItcbiAgICAgICAgLy8gICDlpoLkuI3loavliJnkvb/nlKjpu5jorqTnjq/looPvvIjnrKzkuIDkuKrliJvlu7rnmoTnjq/looPvvIlcbiAgICAgICAgLy8gZW52OiAnbXktZW52LWlkJyxcbiAgICAgICAgdHJhY2VVc2VyOiB0cnVlLFxuICAgICAgfSlcbiAgICB9XG4gICAgd3gubG9hZEZvbnRGYWNlKHtcbiAgICAgIGZhbWlseTogJ0Rvc2lzJyxcbiAgICAgIHNvdXJjZTogJ3VybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RG9zaXM6d2dodEAyMDAmZGlzcGxheT1zd2FwXCIpJyxcbiAgICAgIHN1Y2Nlc3M6IGNvbnNvbGUubG9nLFxuICAgICAgZmFpbDogY29uc29sZS5sb2csXG4gICAgICBjb21wbGV0ZTogY29uc29sZS5sb2dcbiAgICB9KVxuICB9LFxuICBnbG9iYWxEYXRhOiB7XG4gIH0sXG4gIGxvYWRDdXJyZW50RXZlbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XG4gICAgICAgIG5hbWU6IFwiZ2V0Q3VycmVudEV2ZW50c1wiLFxuICAgICAgICBzdWNjZXNzOiAocmVzOiB1bmtub3duKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmVyaWZ5Q3VycmVudEV2ZW50c0Zyb21EYXRhID0gKHJlc3BvbnNlOiB1bmtub3duKSA9PiBmLmZ1bmN0aW9uLnBpcGUoXG4gICAgICAgICAgICByZXNwb25zZSxcbiAgICAgICAgICAgIChyZXNwb25zZSk6IGYuZWl0aGVyLkVpdGhlcjxFcnJvciwgdW5rbm93bj4gPT4gXG4gICAgICAgICAgICAgIC8vIHJlc3BvbnNlLnJlc3VsdC5kYXRhXG4gICAgICAgICAgICAgIHJlc3BvbnNlICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIHJlc3BvbnNlID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgICAgIGhhc093blByb3BlcnR5KHJlc3BvbnNlLCAncmVzdWx0JykgJiZcbiAgICAgICAgICAgICAgICByZXNwb25zZS5yZXN1bHQgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgcmVzcG9uc2UucmVzdWx0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgICAgIGhhc093blByb3BlcnR5KHJlc3BvbnNlLnJlc3VsdCwgJ2RhdGEnKSA/XG4gICAgICAgICAgICAgICAgZi5laXRoZXIucmlnaHQocmVzcG9uc2UucmVzdWx0LmRhdGEpIDogZi5laXRoZXIubGVmdChuZXcgRXJyb3IoJ0RhdGEgZG9lcyBub3QgZXhpc3QnKSksXG4gICAgICAgICAgICBmLmVpdGhlci5jaGFpbigoZGF0YSkgPT5cbiAgICAgICAgICAgICAgdmFsaWRhdGVDdXJyZW50RXZlbnRzRGF0YUZvcm1hdChkYXRhKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGYuZWl0aGVyLmZvbGQoXG4gICAgICAgICAgICAgIChlcnJvcikgPT4gcmVqZWN0KGVycm9yKSxcbiAgICAgICAgICAgICAgKHZlcmlmaWVkQ3VycmVudEV2ZW50cykgPT4ge1xuICAgICAgICAgICAgICAgIHRoYXQuZ2xvYmFsRGF0YS5jdXJyZW50RXZlbnRzID0gdmVyaWZpZWRDdXJyZW50RXZlbnRzXG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoXCJjdXJyZW50RXZlbnRzXCIsIHZlcmlmaWVkQ3VycmVudEV2ZW50cylcbiAgICAgICAgICAgICAgICByZXNvbHZlKHZlcmlmaWVkQ3VycmVudEV2ZW50cylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgICB2ZXJpZnlDdXJyZW50RXZlbnRzRnJvbURhdGEocmVzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogKGVycm9yKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcbiAgfSxcbiAgbG9hZFVzZXJJZDogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3eC5sb2dpbih7XG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICBpZiAocmVzLmNvZGUpIHtcbiAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS53ZWl4aW4ucXEuY29tL3Nucy9qc2NvZGUyc2Vzc2lvbicsXG4gICAgICAgICAgICAgIGRhdGE6e1xuICAgICAgICAgICAgICAgIGFwcGlkOiBDT05GSUcuQVBQX0lELFxuICAgICAgICAgICAgICAgIHNlY3JldDogQ09ORklHLlNFQ1JFVEUsXG4gICAgICAgICAgICAgICAganNfY29kZTogcmVzLmNvZGUsXG4gICAgICAgICAgICAgICAgZ3JhbnRfdHlwZTonYXV0aG9yaXphdGlvbl9jb2RlJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtZXRob2Q6XCJHRVRcIixcbiAgICAgICAgICAgICAgc3VjY2VzcyhyZXM6IGFueSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZlcmlmeU9wZW5pZCA9IChyZXNwb25zZTogdW5rbm93bikgPT4ge1xuICAgICAgICAgICAgICAgICAgZi5mdW5jdGlvbi5waXBlKFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSxcbiAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlOiB1bmtub3duKTogZi5laXRoZXIuRWl0aGVyPEVycm9yLCBzdHJpbmc+ID0+XG4gICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgJiYgdHlwZW9mIHJlc3BvbnNlID09PSAnb2JqZWN0JyAmJiBoYXNPd25Qcm9wZXJ0eShyZXNwb25zZSwgJ2RhdGEnKSAmJlxuICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEgJiYgdHlwZW9mIHJlc3BvbnNlLmRhdGEgPT09ICdvYmplY3QnICYmICBoYXNPd25Qcm9wZXJ0eShyZXNwb25zZS5kYXRhLCAnb3BlbmlkJykgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5vcGVuaWQgJiYgdHlwZW9mIHJlc3BvbnNlLmRhdGEub3BlbmlkID09PSAnc3RyaW5nJyA/XG4gICAgICAgICAgICAgICAgICAgICAgZi5laXRoZXIucmlnaHQocmVzcG9uc2UuZGF0YS5vcGVuaWQpIDogZi5laXRoZXIubGVmdChuZXcgRXJyb3IoJ09wZW4gaWQgZG9lcyBub3QgZXhpc3Qgb24gcmVzcG9uc2UnKSksXG4gICAgICAgICAgICAgICAgICAgIGYuZWl0aGVyLmZvbGQoXG4gICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiByZWplY3QoZXJyb3IpLFxuICAgICAgICAgICAgICAgICAgICAgICh2ZXJpZmllZE9wZW5pZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJPcGVuSWQgPSB2ZXJpZmllZE9wZW5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKFwidXNlck9wZW5JZFwiLCB2ZXJpZmllZE9wZW5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZlcmlmaWVkT3BlbmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2ZXJpZnlPcGVuaWQocmVzKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZmFpbChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoJ1JlY2VpdmVkIGRhdGEgZG9lcyBub3QgaW5jbHVkZSB1c2VyIGNvZGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcbiAgbG9hZFVzZXJTaWduZWRVcEV2ZW50czogYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgLyoqXG4gICAgICogTWFrZSBzdXJlIGN1cnJlbnRFdmVudHMgaGF2ZSBiZWVuIGxvYWRlZFxuICAgICAqL1xuICAgIGxldCBjdXJyZW50RXZlbnRzID0gdGhhdC5nbG9iYWxEYXRhLmN1cnJlbnRFdmVudHM7XG4gICAgaWYgKCFjdXJyZW50RXZlbnRzKSB7XG4gICAgICBjdXJyZW50RXZlbnRzID0gYXdhaXQgdGhhdC5sb2FkQ3VycmVudEV2ZW50cygpO1xuICAgICAgdGhhdC5nbG9iYWxEYXRhLmN1cnJlbnRFdmVudHMgPSBjdXJyZW50RXZlbnRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ha2Ugc3VyZSBjdXJyZW50RXZlbnRzIGhhdmUgYmVlbiBsb2FkZWRcbiAgICAgKi9cbiAgICBsZXQgdXNlck9wZW5JZCA9IHRoYXQuZ2xvYmFsRGF0YS51c2VyT3BlbklkO1xuICAgIGlmICghdXNlck9wZW5JZCkge1xuICAgICAgdXNlck9wZW5JZCA9IGF3YWl0IHRoYXQubG9hZFVzZXJJZCgpO1xuICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJPcGVuSWQgPSB1c2VyT3BlbklkO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNYWtlIHN1cmUgY3VycmVudEV2ZW50cyBoYXZlIGJlZW4gbG9hZGVkXG4gICAgICovXG4gICAgY29uc3QgZXZlbnROYW1lcyA9IGN1cnJlbnRFdmVudHMubWFwKChldmVudDogSUV2ZW50KSA9PiBldmVudC5uYW1lKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcbiAgICAgICAgbmFtZTogXCJmaW5kU2lnbmVkVXBFdmVudHNcIixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHVzZXJPcGVuSWQsXG4gICAgICAgICAgZXZlbnROYW1lcyxcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogKHJlczogdW5rbm93bikgPT4ge1xuICAgICAgICAgIGNvbnN0IHZlcmlmeVVzZXJTaWduZWRVcEV2ZW50cyA9IChyZXNwb25zZTogdW5rbm93bikgPT4gXG4gICAgICAgICAgICBmLmZ1bmN0aW9uLnBpcGUoXG4gICAgICAgICAgICAgIHJlc3BvbnNlLFxuICAgICAgICAgICAgICAocmVzcG9uc2U6IHVua25vd24pID0+XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgJiYgdHlwZW9mIHJlc3BvbnNlID09PSAnb2JqZWN0JyAmJiBoYXNPd25Qcm9wZXJ0eShyZXNwb25zZSwgJ3Jlc3VsdCcpID9cbiAgICAgICAgICAgICAgICAgIGYuZWl0aGVyLnJpZ2h0KHJlc3BvbnNlLnJlc3VsdCkgOiBmLmVpdGhlci5sZWZ0KG5ldyBFcnJvcignUmVzdWx0IGRvZXMgbm90IGV4aXN0JykpLFxuICAgICAgICAgICAgICBmLmVpdGhlci5jaGFpbigoZGF0YTogdW5rbm93bikgPT4gZi5mdW5jdGlvbi5waXBlKFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlQ3VycmVudEV2ZW50c0RhdGFGb3JtYXQoZGF0YSlcbiAgICAgICAgICAgICAgKSksXG4gICAgICAgICAgICAgIGYuZWl0aGVyLmZvbGQoXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiByZWplY3QoZXJyb3IpLFxuICAgICAgICAgICAgICAgICh2ZXJpZmllZFVzZXJTaWduZWRVcEV2ZW50czogSUV2ZW50W10pID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VyU2lnbmVkVXBFdmVudHMgPSB2ZXJpZmllZFVzZXJTaWduZWRVcEV2ZW50cztcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUodmVyaWZpZWRVc2VyU2lnbmVkVXBFdmVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgdmVyaWZ5VXNlclNpZ25lZFVwRXZlbnRzKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogKG1zZykgPT4ge1xuICAgICAgICAgIHJlamVjdChtc2cpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufSlcbiJdfQ==