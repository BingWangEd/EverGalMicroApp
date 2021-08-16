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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlCQUEyQjtBQUUzQixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFjNUIsSUFBTSxjQUFjLEdBQUcsVUFBc0MsR0FBTSxFQUFFLElBQU87SUFDakYsT0FBTyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ2pDLENBQUMsQ0FBQTtBQUZZLFFBQUEsY0FBYyxrQkFFMUI7QUFFTSxJQUFNLCtCQUErQixHQUFHLFVBQUMsSUFBYTtJQUMzRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN4QixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQTtLQUN0RDtJQUVELElBQU0sZ0JBQWdCLEdBQUcsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZGLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7WUFDdkMsSUFBSSxDQUFDLHNCQUFjLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFO2dCQUM3QixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQTthQUN0RDtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7SUFFRixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQWdCLENBQUMsQ0FB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RUFBRSxVQUFDLEdBQUc7d0NBQ1IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29DQUNkLENBQUM7aUNBQ0YsQ0FBQyxDQUFDOzRCQUNMLENBQUMsQ0FBQyxFQUFDOzs7O0tBQ0o7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2FwcC50c1xuaW1wb3J0ICogYXMgZiBmcm9tIFwiZnAtdHNcIjtcblxuY29uc3QgQ09ORklHID0gcmVxdWlyZSgnLi9jb25maWcnKTtcblxuZXhwb3J0IGludGVyZmFjZSBJRXZlbnQge1xuICBkYXRlVGltZTogc3RyaW5nW10sIC8vIFttb250aCwgZGF0ZSwgeWVhciwgZGF5LCB0aW1lXVxuICBoZWFkc3VwOiBzdHJpbmdbXSxcbiAgaWQ6IG51bWJlcixcbiAgbG9jYXRpb246IHN0cmluZyxcbiAgbWVldFNwb3Q6IHN0cmluZyxcbiAgbmFtZTogc3RyaW5nLFxuICBpbWFnZUlkOiBzdHJpbmcsXG4gIF9pZD86IHN0cmluZyxcbn1cblxuLy8gaHR0cHM6Ly9mZXR0YmxvZy5ldS90eXBlc2NyaXB0LWhhc293bnByb3BlcnR5L1xuZXhwb3J0IGNvbnN0IGhhc093blByb3BlcnR5ID0gPFggZXh0ZW5kcyB7fSwgWSBleHRlbmRzIFByb3BlcnR5S2V5PihvYmo6IFgsIHByb3A6IFkpOiBvYmogaXMgWCAmIFJlY29yZDxZLCB1bmtub3duPiA9PiB7XG4gIHJldHVybiBvYmouaGFzT3duUHJvcGVydHkocHJvcClcbn1cblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlQ3VycmVudEV2ZW50c0RhdGFGb3JtYXQgPSAoZGF0YTogdW5rbm93bik6IGYuZWl0aGVyLkVpdGhlcjxFcnJvciwgSUV2ZW50W10+ID0+IHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgcmV0dXJuIGYuZWl0aGVyLmxlZnQobmV3IEVycm9yKCdEYXRhIGlzIG5vdCBhcnJheS4nKSlcbiAgfVxuXG4gIGNvbnN0IGN1cnJlbnRFdmVudEtleXMgPSBbJ2RhdGVUaW1lJywgJ2hlYWRzdXAnLCAnaWQnLCAnbG9jYXRpb24nLCAnbWVldFNwb3QnLCAnbmFtZSddO1xuICBkYXRhLmZvckVhY2goKGVsZSkgPT4ge1xuICAgIE9iamVjdC5rZXlzKGN1cnJlbnRFdmVudEtleXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmICghaGFzT3duUHJvcGVydHkoZWxlLCBrZXkpKSB7XG4gICAgICAgIHJldHVybiBmLmVpdGhlci5sZWZ0KG5ldyBFcnJvcignRGF0YSBpcyBub3QgYXJyYXkuJykpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICByZXR1cm4gZi5laXRoZXIucmlnaHQoZGF0YSBhcyBJRXZlbnRbXSk7XG59O1xuXG5pbnRlcmZhY2UgSUFwcCBleHRlbmRzIElBcHBPcHRpb24ge1xuICBnbG9iYWxEYXRhOiB7XG4gICAgdXNlckluZm8/OiBXZWNoYXRNaW5pcHJvZ3JhbS5Vc2VySW5mbyxcbiAgICBjdXJyZW50RXZlbnRzPzogSUV2ZW50W11cbiAgICB1c2VyU2lnbmVkVXBFdmVudHM/OiBJRXZlbnRbXSxcbiAgICB1c2VyT3BlbklkPzogc3RyaW5nXG4gIH0sXG4gIHVzZXJJbmZvUmVhZHlDYWxsYmFjaz86IFdlY2hhdE1pbmlwcm9ncmFtLkdldFVzZXJJbmZvU3VjY2Vzc0NhbGxiYWNrLFxuICBsb2FkQ3VycmVudEV2ZW50czogKCkgPT4gUHJvbWlzZTxJRXZlbnRbXT4sXG4gIGxvYWRVc2VySWQ6ICgpID0+IFByb21pc2U8c3RyaW5nPixcbiAgbG9hZFVzZXJTaWduZWRVcEV2ZW50czogKCkgPT4gUHJvbWlzZTxJRXZlbnRbXT4sXG59XG5cbkFwcDxJQXBwPih7XG4gIG9uTGF1bmNoOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF3eC5jbG91ZCkge1xuICAgICAgY29uc29sZS5lcnJvcign6K+35L2/55SoIDIuMi4zIOaIluS7peS4iueahOWfuuehgOW6k+S7peS9v+eUqOS6keiDveWKmycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHd4LmNsb3VkLmluaXQoe1xuICAgICAgICAvLyBlbnYg5Y+C5pWw6K+05piO77yaXG4gICAgICAgIC8vICAgZW52IOWPguaVsOWGs+WumuaOpeS4i+adpeWwj+eoi+W6j+WPkei1t+eahOS6keW8gOWPkeiwg+eUqO+8iHd4LmNsb3VkLnh4eO+8ieS8mum7mOiupOivt+axguWIsOWTquS4quS6keeOr+Wig+eahOi1hOa6kFxuICAgICAgICAvLyAgIOatpOWkhOivt+Whq+WFpeeOr+WigyBJRCwg546v5aKDIElEIOWPr+aJk+W8gOS6keaOp+WItuWPsOafpeeci1xuICAgICAgICAvLyAgIOWmguS4jeWhq+WImeS9v+eUqOm7mOiupOeOr+Wig++8iOesrOS4gOS4quWIm+W7uueahOeOr+Wig++8iVxuICAgICAgICAvLyBlbnY6ICdteS1lbnYtaWQnLFxuICAgICAgICB0cmFjZVVzZXI6IHRydWUsXG4gICAgICB9KVxuICAgIH1cbiAgICB3eC5sb2FkRm9udEZhY2Uoe1xuICAgICAgZmFtaWx5OiAnRG9zaXMnLFxuICAgICAgc291cmNlOiAndXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Eb3Npczp3Z2h0QDIwMCZkaXNwbGF5PXN3YXBcIiknLFxuICAgICAgc3VjY2VzczogY29uc29sZS5sb2csXG4gICAgICBmYWlsOiBjb25zb2xlLmxvZyxcbiAgICAgIGNvbXBsZXRlOiBjb25zb2xlLmxvZ1xuICAgIH0pXG4gIH0sXG4gIGdsb2JhbERhdGE6IHtcbiAgfSxcbiAgbG9hZEN1cnJlbnRFdmVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcbiAgICAgICAgbmFtZTogXCJnZXRDdXJyZW50RXZlbnRzXCIsXG4gICAgICAgIHN1Y2Nlc3M6IChyZXM6IHVua25vd24pID0+IHtcbiAgICAgICAgICBjb25zdCB2ZXJpZnlDdXJyZW50RXZlbnRzRnJvbURhdGEgPSAocmVzcG9uc2U6IHVua25vd24pID0+IGYuZnVuY3Rpb24ucGlwZShcbiAgICAgICAgICAgIHJlc3BvbnNlLFxuICAgICAgICAgICAgKHJlc3BvbnNlKTogZi5laXRoZXIuRWl0aGVyPEVycm9yLCB1bmtub3duPiA9PiBcbiAgICAgICAgICAgICAgLy8gcmVzcG9uc2UucmVzdWx0LmRhdGFcbiAgICAgICAgICAgICAgcmVzcG9uc2UgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgcmVzcG9uc2UgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICAgICAgaGFzT3duUHJvcGVydHkocmVzcG9uc2UsICdyZXN1bHQnKSAmJlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLnJlc3VsdCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiByZXNwb25zZS5yZXN1bHQgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICAgICAgaGFzT3duUHJvcGVydHkocmVzcG9uc2UucmVzdWx0LCAnZGF0YScpID9cbiAgICAgICAgICAgICAgICBmLmVpdGhlci5yaWdodChyZXNwb25zZS5yZXN1bHQuZGF0YSkgOiBmLmVpdGhlci5sZWZ0KG5ldyBFcnJvcignRGF0YSBkb2VzIG5vdCBleGlzdCcpKSxcbiAgICAgICAgICAgIGYuZWl0aGVyLmNoYWluKChkYXRhKSA9PlxuICAgICAgICAgICAgICB2YWxpZGF0ZUN1cnJlbnRFdmVudHNEYXRhRm9ybWF0KGRhdGEpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgZi5laXRoZXIuZm9sZChcbiAgICAgICAgICAgICAgKGVycm9yKSA9PiByZWplY3QoZXJyb3IpLFxuICAgICAgICAgICAgICAodmVyaWZpZWRDdXJyZW50RXZlbnRzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhhdC5nbG9iYWxEYXRhLmN1cnJlbnRFdmVudHMgPSB2ZXJpZmllZEN1cnJlbnRFdmVudHNcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYyhcImN1cnJlbnRFdmVudHNcIiwgdmVyaWZpZWRDdXJyZW50RXZlbnRzKVxuICAgICAgICAgICAgICAgIHJlc29sdmUodmVyaWZpZWRDdXJyZW50RXZlbnRzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICAgIHZlcmlmeUN1cnJlbnRFdmVudHNGcm9tRGF0YShyZXMpO1xuICAgICAgICB9LFxuICAgICAgICBmYWlsOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pO1xuICB9LFxuICBsb2FkVXNlcklkOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHd4LmxvZ2luKHtcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgIGlmIChyZXMuY29kZSkge1xuICAgICAgICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLndlaXhpbi5xcS5jb20vc25zL2pzY29kZTJzZXNzaW9uJyxcbiAgICAgICAgICAgICAgZGF0YTp7XG4gICAgICAgICAgICAgICAgYXBwaWQ6IENPTkZJRy5BUFBfSUQsXG4gICAgICAgICAgICAgICAgc2VjcmV0OiBDT05GSUcuU0VDUkVURSxcbiAgICAgICAgICAgICAgICBqc19jb2RlOiByZXMuY29kZSxcbiAgICAgICAgICAgICAgICBncmFudF90eXBlOidhdXRob3JpemF0aW9uX2NvZGUnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1ldGhvZDpcIkdFVFwiLFxuICAgICAgICAgICAgICBzdWNjZXNzKHJlczogYW55KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmVyaWZ5T3BlbmlkID0gKHJlc3BvbnNlOiB1bmtub3duKSA9PiB7XG4gICAgICAgICAgICAgICAgICBmLmZ1bmN0aW9uLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLFxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2U6IHVua25vd24pOiBmLmVpdGhlci5FaXRoZXI8RXJyb3IsIHN0cmluZz4gPT5cbiAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSAmJiB0eXBlb2YgcmVzcG9uc2UgPT09ICdvYmplY3QnICYmIGhhc093blByb3BlcnR5KHJlc3BvbnNlLCAnZGF0YScpICYmXG4gICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YSAmJiB0eXBlb2YgcmVzcG9uc2UuZGF0YSA9PT0gJ29iamVjdCcgJiYgIGhhc093blByb3BlcnR5KHJlc3BvbnNlLmRhdGEsICdvcGVuaWQnKSAmJiBcbiAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLm9wZW5pZCAmJiB0eXBlb2YgcmVzcG9uc2UuZGF0YS5vcGVuaWQgPT09ICdzdHJpbmcnID9cbiAgICAgICAgICAgICAgICAgICAgICBmLmVpdGhlci5yaWdodChyZXNwb25zZS5kYXRhLm9wZW5pZCkgOiBmLmVpdGhlci5sZWZ0KG5ldyBFcnJvcignT3BlbiBpZCBkb2VzIG5vdCBleGlzdCBvbiByZXNwb25zZScpKSxcbiAgICAgICAgICAgICAgICAgICAgZi5laXRoZXIuZm9sZChcbiAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHJlamVjdChlcnJvciksXG4gICAgICAgICAgICAgICAgICAgICAgKHZlcmlmaWVkT3BlbmlkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlck9wZW5JZCA9IHZlcmlmaWVkT3BlbmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoXCJ1c2VyT3BlbklkXCIsIHZlcmlmaWVkT3BlbmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmVyaWZpZWRPcGVuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZlcmlmeU9wZW5pZChyZXMpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmYWlsKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdCgnUmVjZWl2ZWQgZGF0YSBkb2VzIG5vdCBpbmNsdWRlIHVzZXIgY29kZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuICBsb2FkVXNlclNpZ25lZFVwRXZlbnRzOiBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG5cbiAgICAvKipcbiAgICAgKiBNYWtlIHN1cmUgY3VycmVudEV2ZW50cyBoYXZlIGJlZW4gbG9hZGVkXG4gICAgICovXG4gICAgbGV0IGN1cnJlbnRFdmVudHMgPSB0aGF0Lmdsb2JhbERhdGEuY3VycmVudEV2ZW50cztcbiAgICBpZiAoIWN1cnJlbnRFdmVudHMpIHtcbiAgICAgIGN1cnJlbnRFdmVudHMgPSBhd2FpdCB0aGF0LmxvYWRDdXJyZW50RXZlbnRzKCk7XG4gICAgICB0aGF0Lmdsb2JhbERhdGEuY3VycmVudEV2ZW50cyA9IGN1cnJlbnRFdmVudHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFrZSBzdXJlIGN1cnJlbnRFdmVudHMgaGF2ZSBiZWVuIGxvYWRlZFxuICAgICAqL1xuICAgIGxldCB1c2VyT3BlbklkID0gdGhhdC5nbG9iYWxEYXRhLnVzZXJPcGVuSWQ7XG4gICAgaWYgKCF1c2VyT3BlbklkKSB7XG4gICAgICB1c2VyT3BlbklkID0gYXdhaXQgdGhhdC5sb2FkVXNlcklkKCk7XG4gICAgICB0aGF0Lmdsb2JhbERhdGEudXNlck9wZW5JZCA9IHVzZXJPcGVuSWQ7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIE1ha2Ugc3VyZSBjdXJyZW50RXZlbnRzIGhhdmUgYmVlbiBsb2FkZWRcbiAgICAgKi9cbiAgICBjb25zdCBldmVudE5hbWVzID0gY3VycmVudEV2ZW50cy5tYXAoKGV2ZW50OiBJRXZlbnQpID0+IGV2ZW50Lm5hbWUpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xuICAgICAgICBuYW1lOiBcImZpbmRTaWduZWRVcEV2ZW50c1wiLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdXNlck9wZW5JZCxcbiAgICAgICAgICBldmVudE5hbWVzLFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiAocmVzOiB1bmtub3duKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmVyaWZ5VXNlclNpZ25lZFVwRXZlbnRzID0gKHJlc3BvbnNlOiB1bmtub3duKSA9PiBcbiAgICAgICAgICAgIGYuZnVuY3Rpb24ucGlwZShcbiAgICAgICAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgICAgICAgIChyZXNwb25zZTogdW5rbm93bikgPT5cbiAgICAgICAgICAgICAgICByZXNwb25zZSAmJiB0eXBlb2YgcmVzcG9uc2UgPT09ICdvYmplY3QnICYmIGhhc093blByb3BlcnR5KHJlc3BvbnNlLCAncmVzdWx0JykgP1xuICAgICAgICAgICAgICAgICAgZi5laXRoZXIucmlnaHQocmVzcG9uc2UucmVzdWx0KSA6IGYuZWl0aGVyLmxlZnQobmV3IEVycm9yKCdSZXN1bHQgZG9lcyBub3QgZXhpc3QnKSksXG4gICAgICAgICAgICAgIGYuZWl0aGVyLmNoYWluKChkYXRhOiB1bmtub3duKSA9PiBmLmZ1bmN0aW9uLnBpcGUoXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVDdXJyZW50RXZlbnRzRGF0YUZvcm1hdChkYXRhKVxuICAgICAgICAgICAgICApKSxcbiAgICAgICAgICAgICAgZi5laXRoZXIuZm9sZChcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHJlamVjdChlcnJvciksXG4gICAgICAgICAgICAgICAgKHZlcmlmaWVkVXNlclNpZ25lZFVwRXZlbnRzOiBJRXZlbnRbXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJTaWduZWRVcEV2ZW50cyA9IHZlcmlmaWVkVXNlclNpZ25lZFVwRXZlbnRzO1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2ZXJpZmllZFVzZXJTaWduZWRVcEV2ZW50cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICB2ZXJpZnlVc2VyU2lnbmVkVXBFdmVudHMocmVzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiAobXNnKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KG1zZyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59KVxuIl19