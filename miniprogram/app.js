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
const CONFIG = require('./config');
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
        const that = this;
        return new Promise((resolve, reject) => {
            wx.cloud.callFunction({
                name: "getCurrentEvents",
                success: (res) => {
                    var _a;
                    if ((_a = res === null || res === void 0 ? void 0 : res.result) === null || _a === void 0 ? void 0 : _a.data) {
                        const currentEvents = res.result.data;
                        that.globalData.currentEvents = currentEvents;
                        wx.setStorageSync("currentEvents", currentEvents);
                        resolve(currentEvents);
                    }
                    else {
                        reject(res);
                    }
                },
                fail: (err) => {
                    reject(err);
                }
            });
        });
    },
    loadUserId: function () {
        const that = this;
        return new Promise((resolve, reject) => {
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
                            success(res) {
                                if (res.data.openid) {
                                    const userOpenId = res.data.openid;
                                    that.globalData.userOpenId = userOpenId;
                                    wx.setStorageSync("userOpenId", userOpenId);
                                    resolve(userOpenId);
                                }
                                else {
                                    reject('Received data does not include user open id');
                                }
                            },
                            fail(err) {
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
        return __awaiter(this, void 0, void 0, function* () {
            const that = this;
            let currentEvents = that.globalData.currentEvents;
            if (!currentEvents) {
                currentEvents = yield that.loadCurrentEvents();
                that.globalData.currentEvents = currentEvents;
            }
            let userOpenId = that.globalData.userOpenId;
            if (!userOpenId) {
                userOpenId = yield that.loadUserId();
                that.globalData.userOpenId = userOpenId;
            }
            const eventNames = currentEvents.map((event) => event.name);
            return new Promise((resolve, reject) => {
                wx.cloud.callFunction({
                    name: "findSignedUpEvents",
                    data: {
                        userOpenId,
                        eventNames,
                    },
                    success: (res) => {
                        if (res.result) {
                            that.globalData.userSignedUpEvents = res.result;
                            resolve(res.result);
                        }
                        else {
                            reject('Cannot find userSignedUpEvents');
                        }
                    },
                    fail: (msg) => {
                        reject(msg);
                    }
                });
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFbkMsR0FBRyxDQUFhO0lBQ2QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUU7WUFDYixPQUFPLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUE7U0FDekM7YUFBTTtZQUNMLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQU1aLFNBQVMsRUFBRSxJQUFJO2FBQ2hCLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUNELFVBQVUsRUFBRTtRQUNWLGFBQWEsRUFBRSxTQUFTO1FBQ3hCLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLGtCQUFrQixFQUFFLFNBQVM7S0FDOUI7SUFDRCxpQkFBaUIsRUFBRTtRQUNqQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztnQkFDcEIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsT0FBTyxFQUFFLENBQUMsR0FBUSxFQUFFLEVBQUU7O29CQUNwQixJQUFJLE1BQUEsR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLE1BQU0sMENBQUUsSUFBSSxFQUFFO3dCQUNyQixNQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt3QkFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO3dCQUM5QyxFQUFFLENBQUMsY0FBYyxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQzt3QkFDbEQsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO3FCQUN4Qjt5QkFB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LENBQUMsVUFBVSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7NEJBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7eUJBQ3JCOzZCQUFNOzRCQUNMLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO3lCQUMxQztvQkFDSCxDQUFDO29CQUNELElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO3dCQUNaLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDZCxDQUFDO2lCQUNGLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUFBO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9hcHAuanNcbmNvbnN0IENPTkZJRyA9IHJlcXVpcmUoJy4vY29uZmlnJyk7XG5cbkFwcDxJQXBwT3B0aW9uPih7XG4gIG9uTGF1bmNoOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF3eC5jbG91ZCkge1xuICAgICAgY29uc29sZS5lcnJvcign6K+35L2/55SoIDIuMi4zIOaIluS7peS4iueahOWfuuehgOW6k+S7peS9v+eUqOS6keiDveWKmycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHd4LmNsb3VkLmluaXQoe1xuICAgICAgICAvLyBlbnYg5Y+C5pWw6K+05piO77yaXG4gICAgICAgIC8vICAgZW52IOWPguaVsOWGs+WumuaOpeS4i+adpeWwj+eoi+W6j+WPkei1t+eahOS6keW8gOWPkeiwg+eUqO+8iHd4LmNsb3VkLnh4eO+8ieS8mum7mOiupOivt+axguWIsOWTquS4quS6keeOr+Wig+eahOi1hOa6kFxuICAgICAgICAvLyAgIOatpOWkhOivt+Whq+WFpeeOr+WigyBJRCwg546v5aKDIElEIOWPr+aJk+W8gOS6keaOp+WItuWPsOafpeeci1xuICAgICAgICAvLyAgIOWmguS4jeWhq+WImeS9v+eUqOm7mOiupOeOr+Wig++8iOesrOS4gOS4quWIm+W7uueahOeOr+Wig++8iVxuICAgICAgICAvLyBlbnY6ICdteS1lbnYtaWQnLFxuICAgICAgICB0cmFjZVVzZXI6IHRydWUsXG4gICAgICB9KVxuICAgIH1cbiAgfSxcbiAgZ2xvYmFsRGF0YToge1xuICAgIGN1cnJlbnRFdmVudHM6IHVuZGVmaW5lZCxcbiAgICB1c2VyT3BlbklkOiB1bmRlZmluZWQsXG4gICAgdXNlclNpZ25lZFVwRXZlbnRzOiB1bmRlZmluZWQsXG4gIH0sXG4gIGxvYWRDdXJyZW50RXZlbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XG4gICAgICAgIG5hbWU6IFwiZ2V0Q3VycmVudEV2ZW50c1wiLFxuICAgICAgICBzdWNjZXNzOiAocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAocmVzPy5yZXN1bHQ/LmRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRFdmVudHMgPSByZXMucmVzdWx0LmRhdGE7XG4gICAgICAgICAgICB0aGF0Lmdsb2JhbERhdGEuY3VycmVudEV2ZW50cyA9IGN1cnJlbnRFdmVudHM7XG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYyhcImN1cnJlbnRFdmVudHNcIiwgY3VycmVudEV2ZW50cyk7XG4gICAgICAgICAgICByZXNvbHZlKGN1cnJlbnRFdmVudHMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QocmVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IChlcnIpID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcbiAgfSxcbiAgbG9hZFVzZXJJZDogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3eC5sb2dpbih7XG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICBpZiAocmVzLmNvZGUpIHtcbiAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS53ZWl4aW4ucXEuY29tL3Nucy9qc2NvZGUyc2Vzc2lvbicsXG4gICAgICAgICAgICAgIGRhdGE6e1xuICAgICAgICAgICAgICAgIGFwcGlkOiBDT05GSUcuQVBQX0lELFxuICAgICAgICAgICAgICAgIHNlY3JldDogQ09ORklHLlNFQ1JFVEUsXG4gICAgICAgICAgICAgICAganNfY29kZTogcmVzLmNvZGUsXG4gICAgICAgICAgICAgICAgZ3JhbnRfdHlwZTonYXV0aG9yaXphdGlvbl9jb2RlJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtZXRob2Q6XCJHRVRcIixcbiAgICAgICAgICAgICAgc3VjY2VzcyhyZXM6IGFueSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5vcGVuaWQpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJPcGVuSWQgPSByZXMuZGF0YS5vcGVuaWQ7XG4gICAgICAgICAgICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlck9wZW5JZCA9IHVzZXJPcGVuSWQ7XG4gICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYyhcInVzZXJPcGVuSWRcIiwgdXNlck9wZW5JZCk7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlKHVzZXJPcGVuSWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZWplY3QoJ1JlY2VpdmVkIGRhdGEgZG9lcyBub3QgaW5jbHVkZSB1c2VyIG9wZW4gaWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZhaWwoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KCdSZWNlaXZlZCBkYXRhIGRvZXMgbm90IGluY2x1ZGUgdXNlciBjb2RlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG4gIGxvYWRVc2VyU2lnbmVkVXBFdmVudHM6IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcblxuICAgIC8qKlxuICAgICAqIE1ha2Ugc3VyZSBjdXJyZW50RXZlbnRzIGhhdmUgYmVlbiBsb2FkZWRcbiAgICAgKi9cbiAgICBsZXQgY3VycmVudEV2ZW50cyA9IHRoYXQuZ2xvYmFsRGF0YS5jdXJyZW50RXZlbnRzO1xuICAgIGlmICghY3VycmVudEV2ZW50cykge1xuICAgICAgY3VycmVudEV2ZW50cyA9IGF3YWl0IHRoYXQubG9hZEN1cnJlbnRFdmVudHMoKTtcbiAgICAgIHRoYXQuZ2xvYmFsRGF0YS5jdXJyZW50RXZlbnRzID0gY3VycmVudEV2ZW50cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYWtlIHN1cmUgY3VycmVudEV2ZW50cyBoYXZlIGJlZW4gbG9hZGVkXG4gICAgICovXG4gICAgbGV0IHVzZXJPcGVuSWQgPSB0aGF0Lmdsb2JhbERhdGEudXNlck9wZW5JZDtcbiAgICBpZiAoIXVzZXJPcGVuSWQpIHtcbiAgICAgIHVzZXJPcGVuSWQgPSBhd2FpdCB0aGF0LmxvYWRVc2VySWQoKTtcbiAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VyT3BlbklkID0gdXNlck9wZW5JZDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTWFrZSBzdXJlIGN1cnJlbnRFdmVudHMgaGF2ZSBiZWVuIGxvYWRlZFxuICAgICAqL1xuICAgIGNvbnN0IGV2ZW50TmFtZXMgPSBjdXJyZW50RXZlbnRzLm1hcCgoZXZlbnQ6IElFdmVudCkgPT4gZXZlbnQubmFtZSk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XG4gICAgICAgIG5hbWU6IFwiZmluZFNpZ25lZFVwRXZlbnRzXCIsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB1c2VyT3BlbklkLFxuICAgICAgICAgIGV2ZW50TmFtZXMsXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChyZXMucmVzdWx0KSB7XG4gICAgICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlclNpZ25lZFVwRXZlbnRzID0gcmVzLnJlc3VsdDtcbiAgICAgICAgICAgIHJlc29sdmUocmVzLnJlc3VsdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdCgnQ2Fubm90IGZpbmQgdXNlclNpZ25lZFVwRXZlbnRzJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiAobXNnKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KG1zZyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59KVxuIl19