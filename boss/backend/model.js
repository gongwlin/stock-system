const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/imooc', function () {
    console.log('connected mongodb')
})

const models = {
    user: {
        user: { type: String, require: true },      // 用户名
        pwd: { type: String, require: true },       // 密码
        type: { type: String, require: true },      // 类型： boss/ genius
        
        avatar: { type: String, require: true },    // 头像
        title: { type: String },                    // 职位名称
        desc: { type: Array },                     // 个人描述/ 职位简介

        // boss
        company: { type: String },
        money: { type: String}
    },
    chat: {

    }
}

// 生成user、chat两个model
for (let m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel: function (name) {
        return mongoose.model(name)
    }
}