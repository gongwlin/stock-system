const Router = require('express').Router()
const utility = require('utility')
const model = require('./model')
const User = model.getModel('user')


const _filter = {_v: 0, pwd: 0}

Router.get('/info', function (req, res) {
    console.log('send', req.body)
    return res.json({ code: 0, msg: 'login success', type: 'boss', avatar: false })
})

Router.post('/login', function (req, res) {
    const { user, pwd } = req.body
    User.findOne({ user, pwd: md5Encrypt(pwd) }, _filter, function(err, data) {
        if(err) {
            return res.json({code: 500, msg: '服务器错误'})
        } else if (!data) {
            return res.json({ code: 400, msg: '用户名或密码错误' })
        }
        res.cookie('userId', data._id)
        console.log('user', data)
        return res.json({ code: 0, msg: '登录成功',data: {user, type: data.type} })
   })
})


Router.post('/register', function (req, res) {
    const {user, pwd, type} = req.body
    User.findOne({user},function(err, user) {
        if(user){
            return res.json({code: 400, msg: '用户名重复'})
        }
    })

    const UserModel = new User({user, type, pwd: md5Encrypt(pwd)})
    UserModel.save(function(err, doc){
        if (err) {
            return res.json({code: 500, msg: '服务器错误'})
        }
        const { _id, type, user } = doc
        res.cookie('cookieId', _id)
        return res.json({code: 0, data: {user, type}})
    })
})


// 对密码进行两次md5运算加密
function md5Encrypt(pwd) {
    const salt = '0xFFFFFFFF*&^%$@!'
    return utility.md5(utility.md5(salt + pwd))
}


module.exports = Router