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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlCQUEyQjtBQUUzQixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFhNUIsSUFBTSxjQUFjLEdBQUcsVUFBc0MsR0FBTSxFQUFFLElBQU87SUFDakYsT0FBTyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ2pDLENBQUMsQ0FBQTtBQUZZLFFBQUEsY0FBYyxrQkFFMUI7QUFFTSxJQUFNLCtCQUErQixHQUFHLFVBQUMsSUFBYTtJQUMzRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN4QixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQTtLQUN0RDtJQUVELElBQU0sZ0JBQWdCLEdBQUcsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZGLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7WUFDdkMsSUFBSSxDQUFDLHNCQUFjLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFO2dCQUM3QixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQTthQUN0RDtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7SUFFRixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQWdCLENBQUMsQ0FB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XG5cbmNvbnN0IENPTkZJRyA9IHJlcXVpcmUoJy4vY29uZmlnJyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUV2ZW50IHtcbiAgZGF0ZVRpbWU6IHN0cmluZyxcbiAgaGVhZHN1cDogc3RyaW5nW10sXG4gIGlkOiBudW1iZXIsXG4gIGxvY2F0aW9uOiBzdHJpbmcsXG4gIG1lZXRTcG90OiBzdHJpbmcsXG4gIG5hbWU6IHN0cmluZyxcbiAgaW1hZ2VJZDogc3RyaW5nLFxufVxuXG4vLyBodHRwczovL2ZldHRibG9nLmV1L3R5cGVzY3JpcHQtaGFzb3ducHJvcGVydHkvXG5leHBvcnQgY29uc3QgaGFzT3duUHJvcGVydHkgPSA8WCBleHRlbmRzIHt9LCBZIGV4dGVuZHMgUHJvcGVydHlLZXk+KG9iajogWCwgcHJvcDogWSk6IG9iaiBpcyBYICYgUmVjb3JkPFksIHVua25vd24+ID0+IHtcbiAgcmV0dXJuIG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKVxufVxuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVDdXJyZW50RXZlbnRzRGF0YUZvcm1hdCA9IChkYXRhOiB1bmtub3duKTogZi5laXRoZXIuRWl0aGVyPEVycm9yLCBJRXZlbnRbXT4gPT4ge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICByZXR1cm4gZi5laXRoZXIubGVmdChuZXcgRXJyb3IoJ0RhdGEgaXMgbm90IGFycmF5LicpKVxuICB9XG5cbiAgY29uc3QgY3VycmVudEV2ZW50S2V5cyA9IFsnZGF0ZVRpbWUnLCAnaGVhZHN1cCcsICdpZCcsICdsb2NhdGlvbicsICdtZWV0U3BvdCcsICduYW1lJ107XG4gIGRhdGEuZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgT2JqZWN0LmtleXMoY3VycmVudEV2ZW50S2V5cykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShlbGUsIGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGYuZWl0aGVyLmxlZnQobmV3IEVycm9yKCdEYXRhIGlzIG5vdCBhcnJheS4nKSlcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIHJldHVybiBmLmVpdGhlci5yaWdodChkYXRhIGFzIElFdmVudFtdKTtcbn07XG5cbmludGVyZmFjZSBJQXBwIGV4dGVuZHMgSUFwcE9wdGlvbiB7XG4gIGdsb2JhbERhdGE6IHtcbiAgICB1c2VySW5mbz86IFdlY2hhdE1pbmlwcm9ncmFtLlVzZXJJbmZvLFxuICAgIGN1cnJlbnRFdmVudHM/OiBJRXZlbnRbXVxuICAgIHVzZXJTaWduZWRVcEV2ZW50cz86IElFdmVudFtdLFxuICAgIHVzZXJPcGVuSWQ/OiBzdHJpbmdcbiAgfSxcbiAgdXNlckluZm9SZWFkeUNhbGxiYWNrPzogV2VjaGF0TWluaXByb2dyYW0uR2V0VXNlckluZm9TdWNjZXNzQ2FsbGJhY2ssXG4gIGxvYWRDdXJyZW50RXZlbnRzOiAoKSA9PiBQcm9taXNlPElFdmVudFtdPixcbiAgbG9hZFVzZXJJZDogKCkgPT4gUHJvbWlzZTxzdHJpbmc+LFxuICBsb2FkVXNlclNpZ25lZFVwRXZlbnRzOiAoKSA9PiBQcm9taXNlPElFdmVudFtdPixcbn1cblxuQXBwPElBcHA+KHtcbiAgb25MYXVuY2g6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXd4LmNsb3VkKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfor7fkvb/nlKggMi4yLjMg5oiW5Lul5LiK55qE5Z+656GA5bqT5Lul5L2/55So5LqR6IO95YqbJylcbiAgICB9IGVsc2Uge1xuICAgICAgd3guY2xvdWQuaW5pdCh7XG4gICAgICAgIC8vIGVudiDlj4LmlbDor7TmmI7vvJpcbiAgICAgICAgLy8gICBlbnYg5Y+C5pWw5Yaz5a6a5o6l5LiL5p2l5bCP56iL5bqP5Y+R6LW355qE5LqR5byA5Y+R6LCD55So77yId3guY2xvdWQueHh477yJ5Lya6buY6K6k6K+35rGC5Yiw5ZOq5Liq5LqR546v5aKD55qE6LWE5rqQXG4gICAgICAgIC8vICAg5q2k5aSE6K+35aGr5YWl546v5aKDIElELCDnjq/looMgSUQg5Y+v5omT5byA5LqR5o6n5Yi25Y+w5p+l55yLXG4gICAgICAgIC8vICAg5aaC5LiN5aGr5YiZ5L2/55So6buY6K6k546v5aKD77yI56ys5LiA5Liq5Yib5bu655qE546v5aKD77yJXG4gICAgICAgIC8vIGVudjogJ215LWVudi1pZCcsXG4gICAgICAgIHRyYWNlVXNlcjogdHJ1ZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuICBnbG9iYWxEYXRhOiB7XG4gIH0sXG4gIGxvYWRDdXJyZW50RXZlbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XG4gICAgICAgIG5hbWU6IFwiZ2V0Q3VycmVudEV2ZW50c1wiLFxuICAgICAgICBzdWNjZXNzOiAocmVzOiB1bmtub3duKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmVyaWZ5Q3VycmVudEV2ZW50c0Zyb21EYXRhID0gKHJlc3BvbnNlOiB1bmtub3duKSA9PiBmLmZ1bmN0aW9uLnBpcGUoXG4gICAgICAgICAgICByZXNwb25zZSxcbiAgICAgICAgICAgIChyZXNwb25zZSk6IGYuZWl0aGVyLkVpdGhlcjxFcnJvciwgdW5rbm93bj4gPT4gXG4gICAgICAgICAgICAgIC8vIHJlc3BvbnNlLnJlc3VsdC5kYXRhXG4gICAgICAgICAgICAgIHJlc3BvbnNlICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIHJlc3BvbnNlID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgICAgIGhhc093blByb3BlcnR5KHJlc3BvbnNlLCAncmVzdWx0JykgJiZcbiAgICAgICAgICAgICAgICByZXNwb25zZS5yZXN1bHQgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgcmVzcG9uc2UucmVzdWx0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgICAgIGhhc093blByb3BlcnR5KHJlc3BvbnNlLnJlc3VsdCwgJ2RhdGEnKSA/XG4gICAgICAgICAgICAgICAgZi5laXRoZXIucmlnaHQocmVzcG9uc2UucmVzdWx0LmRhdGEpIDogZi5laXRoZXIubGVmdChuZXcgRXJyb3IoJ0RhdGEgZG9lcyBub3QgZXhpc3QnKSksXG4gICAgICAgICAgICBmLmVpdGhlci5jaGFpbigoZGF0YSkgPT5cbiAgICAgICAgICAgICAgdmFsaWRhdGVDdXJyZW50RXZlbnRzRGF0YUZvcm1hdChkYXRhKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGYuZWl0aGVyLmZvbGQoXG4gICAgICAgICAgICAgIChlcnJvcikgPT4gcmVqZWN0KGVycm9yKSxcbiAgICAgICAgICAgICAgKHZlcmlmaWVkQ3VycmVudEV2ZW50cykgPT4ge1xuICAgICAgICAgICAgICAgIHRoYXQuZ2xvYmFsRGF0YS5jdXJyZW50RXZlbnRzID0gdmVyaWZpZWRDdXJyZW50RXZlbnRzXG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoXCJjdXJyZW50RXZlbnRzXCIsIHZlcmlmaWVkQ3VycmVudEV2ZW50cylcbiAgICAgICAgICAgICAgICByZXNvbHZlKHZlcmlmaWVkQ3VycmVudEV2ZW50cylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgICB2ZXJpZnlDdXJyZW50RXZlbnRzRnJvbURhdGEocmVzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogKGVycm9yKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcbiAgfSxcbiAgbG9hZFVzZXJJZDogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3eC5sb2dpbih7XG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICBpZiAocmVzLmNvZGUpIHtcbiAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS53ZWl4aW4ucXEuY29tL3Nucy9qc2NvZGUyc2Vzc2lvbicsXG4gICAgICAgICAgICAgIGRhdGE6e1xuICAgICAgICAgICAgICAgIGFwcGlkOiBDT05GSUcuQVBQX0lELFxuICAgICAgICAgICAgICAgIHNlY3JldDogQ09ORklHLlNFQ1JFVEUsXG4gICAgICAgICAgICAgICAganNfY29kZTogcmVzLmNvZGUsXG4gICAgICAgICAgICAgICAgZ3JhbnRfdHlwZTonYXV0aG9yaXphdGlvbl9jb2RlJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtZXRob2Q6XCJHRVRcIixcbiAgICAgICAgICAgICAgc3VjY2VzcyhyZXM6IGFueSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZlcmlmeU9wZW5pZCA9IChyZXNwb25zZTogdW5rbm93bikgPT4ge1xuICAgICAgICAgICAgICAgICAgZi5mdW5jdGlvbi5waXBlKFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSxcbiAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlOiB1bmtub3duKTogZi5laXRoZXIuRWl0aGVyPEVycm9yLCBzdHJpbmc+ID0+XG4gICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgJiYgdHlwZW9mIHJlc3BvbnNlID09PSAnb2JqZWN0JyAmJiBoYXNPd25Qcm9wZXJ0eShyZXNwb25zZSwgJ2RhdGEnKSAmJlxuICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEgJiYgdHlwZW9mIHJlc3BvbnNlLmRhdGEgPT09ICdvYmplY3QnICYmICBoYXNPd25Qcm9wZXJ0eShyZXNwb25zZS5kYXRhLCAnb3BlbmlkJykgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5vcGVuaWQgJiYgdHlwZW9mIHJlc3BvbnNlLmRhdGEub3BlbmlkID09PSAnc3RyaW5nJyA/XG4gICAgICAgICAgICAgICAgICAgICAgZi5laXRoZXIucmlnaHQocmVzcG9uc2UuZGF0YS5vcGVuaWQpIDogZi5laXRoZXIubGVmdChuZXcgRXJyb3IoJ09wZW4gaWQgZG9lcyBub3QgZXhpc3Qgb24gcmVzcG9uc2UnKSksXG4gICAgICAgICAgICAgICAgICAgIGYuZWl0aGVyLmZvbGQoXG4gICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiByZWplY3QoZXJyb3IpLFxuICAgICAgICAgICAgICAgICAgICAgICh2ZXJpZmllZE9wZW5pZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJPcGVuSWQgPSB2ZXJpZmllZE9wZW5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKFwidXNlck9wZW5JZFwiLCB2ZXJpZmllZE9wZW5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZlcmlmaWVkT3BlbmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2ZXJpZnlPcGVuaWQocmVzKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZmFpbChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoJ1JlY2VpdmVkIGRhdGEgZG9lcyBub3QgaW5jbHVkZSB1c2VyIGNvZGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcbiAgbG9hZFVzZXJTaWduZWRVcEV2ZW50czogYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG4gICAgLyoqXG4gICAgICogTWFrZSBzdXJlIGN1cnJlbnRFdmVudHMgaGF2ZSBiZWVuIGxvYWRlZFxuICAgICAqL1xuICAgIGxldCBjdXJyZW50RXZlbnRzID0gdGhhdC5nbG9iYWxEYXRhLmN1cnJlbnRFdmVudHM7XG4gICAgaWYgKCFjdXJyZW50RXZlbnRzKSB7XG4gICAgICBjdXJyZW50RXZlbnRzID0gYXdhaXQgdGhhdC5sb2FkQ3VycmVudEV2ZW50cygpO1xuICAgICAgdGhhdC5nbG9iYWxEYXRhLmN1cnJlbnRFdmVudHMgPSBjdXJyZW50RXZlbnRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ha2Ugc3VyZSBjdXJyZW50RXZlbnRzIGhhdmUgYmVlbiBsb2FkZWRcbiAgICAgKi9cbiAgICBsZXQgdXNlck9wZW5JZCA9IHRoYXQuZ2xvYmFsRGF0YS51c2VyT3BlbklkO1xuICAgIGlmICghdXNlck9wZW5JZCkge1xuICAgICAgdXNlck9wZW5JZCA9IGF3YWl0IHRoYXQubG9hZFVzZXJJZCgpO1xuICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJPcGVuSWQgPSB1c2VyT3BlbklkO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBNYWtlIHN1cmUgY3VycmVudEV2ZW50cyBoYXZlIGJlZW4gbG9hZGVkXG4gICAgICovXG4gICAgY29uc3QgZXZlbnROYW1lcyA9IGN1cnJlbnRFdmVudHMubWFwKChldmVudDogSUV2ZW50KSA9PiBldmVudC5uYW1lKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcbiAgICAgICAgbmFtZTogXCJmaW5kU2lnbmVkVXBFdmVudHNcIixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHVzZXJPcGVuSWQsXG4gICAgICAgICAgZXZlbnROYW1lcyxcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogKHJlczogdW5rbm93bikgPT4ge1xuICAgICAgICAgIGNvbnN0IHZlcmlmeVVzZXJTaWduZWRVcEV2ZW50cyA9IChyZXNwb25zZTogdW5rbm93bikgPT4gXG4gICAgICAgICAgICBmLmZ1bmN0aW9uLnBpcGUoXG4gICAgICAgICAgICAgIHJlc3BvbnNlLFxuICAgICAgICAgICAgICAocmVzcG9uc2U6IHVua25vd24pID0+XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgJiYgdHlwZW9mIHJlc3BvbnNlID09PSAnb2JqZWN0JyAmJiBoYXNPd25Qcm9wZXJ0eShyZXNwb25zZSwgJ3Jlc3VsdCcpID9cbiAgICAgICAgICAgICAgICAgIGYuZWl0aGVyLnJpZ2h0KHJlc3BvbnNlLnJlc3VsdCkgOiBmLmVpdGhlci5sZWZ0KG5ldyBFcnJvcignUmVzdWx0IGRvZXMgbm90IGV4aXN0JykpLFxuICAgICAgICAgICAgICBmLmVpdGhlci5jaGFpbigoZGF0YTogdW5rbm93bikgPT4gZi5mdW5jdGlvbi5waXBlKFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlQ3VycmVudEV2ZW50c0RhdGFGb3JtYXQoZGF0YSlcbiAgICAgICAgICAgICAgKSksXG4gICAgICAgICAgICAgIGYuZWl0aGVyLmZvbGQoXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiByZWplY3QoZXJyb3IpLFxuICAgICAgICAgICAgICAgICh2ZXJpZmllZFVzZXJTaWduZWRVcEV2ZW50czogSUV2ZW50W10pID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VyU2lnbmVkVXBFdmVudHMgPSB2ZXJpZmllZFVzZXJTaWduZWRVcEV2ZW50cztcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUodmVyaWZpZWRVc2VyU2lnbmVkVXBFdmVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgdmVyaWZ5VXNlclNpZ25lZFVwRXZlbnRzKHJlcylcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogKG1zZykgPT4ge1xuICAgICAgICAgIHJlamVjdChtc2cpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufSlcbiJdfQ==