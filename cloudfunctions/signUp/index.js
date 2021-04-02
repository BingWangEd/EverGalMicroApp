// 云函数入口文件
const cloud = require('wx-server-sdk')

// TODO: only need to load cloud once
cloud.init()

const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  return await db.collection(event.event).add({
    data: {
      ...event
    }
  })
}