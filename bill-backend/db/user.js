var mongoose = require('./connect.js'),
    Schema = mongoose.Schema;

// Schema 相当于表， 映射到mongodb为collection， 但不具备操作数据库的能力
// model 是Schema生成的模型，可以对数据库进行操作

// document 相当于记录
var UserSchema = new Schema({
    username: { type: String },                    //用户账号
    userpwd: { type: String },                        //密码
    userage: { type: Number },                        //年龄
    logindate: { type: Date }                       //最近登录时间
});

const User = mongoose.model('User', UserSchema);

var user = new User({
    username: 'Tracy McGrady',                 //用户账号
    userpwd: 'abcd',                            //密码
    userage: 37,                                //年龄
    logindate: new Date()                      //最近登录时间
});

user.save(function (err, res) {

    if (err) {
        console.log("Error:" + err);
    }
    else {
        console.log("Res:" + res);
    }

});