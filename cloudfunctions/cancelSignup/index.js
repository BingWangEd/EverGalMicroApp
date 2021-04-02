// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init();
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  const eventName = event.eventName;
  const userOpenId = event.userOpenId;
  console.log('cancelSignup: ', event);
  return await db.collection(eventName).where({
    'userInfo.openId': userOpenId
  }).remove({
    success: function(res) {
      console.log(`Deleted user from ${eventName}.`);
    }
  });
}