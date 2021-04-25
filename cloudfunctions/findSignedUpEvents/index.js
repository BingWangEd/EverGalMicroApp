// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  const eventNames = event.eventNames;
  const userOpenId = event.userOpenId;

  let signedUpEvents = [];
  await Promise.all(eventNames.map(async (event) => {
    let res = {event, userOpenId};
    res = await db.collection(event).where({
      'userInfo.openId': userOpenId
    }).get();

    if (res.data.length > 0) {
      signedUpEvents = [event, ...signedUpEvents];
    }
  }));

  return Promise.resolve(signedUpEvents);
}