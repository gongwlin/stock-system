const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String },                    //用户账号
    password: { type: String },                     //密码
    logindate: { type: Date }                      //最近登录时间
});

const User = mongoose.model('User', UserSchema);

module.exports = User


/**
 *  Schema:
 *
 *  session: {
 *      id:
 *  }
 *
 *  user: {username, password, loginDate, id}
 *
 *  data: {
 *      {
 *          id: 1,
 *          {type}, {}, {}
 *      }
 *  }
 */