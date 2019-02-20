// const express = require('express');
// const router = express.Router();

// router.post('',function(req,res) {
//     console.log('req.body',req.body);
//     const { usm, pwd } = req.body;
//     console.log('router',usm,pwd);
//     res.setHeader('Access-Control-Allow-Origin','*');
//     res.send('aaaaa');
// });




// const register = ctx => {
//     console.log('login');
//     ctx.set('Access-Control-Allow-Origin', '*');
//     ctx.body = 'register'
// }

const User = require('../model/user');

const register = async (ctx) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    const { username, password } = ctx.request.body;
    // console.log('username, password', username, password);

    const findResult = await User.findOne({'username':username})
   
    if ( findResult ) {
        ctx.body = {
            msg: '用户名重复',
            data: {},
            code: 1
        }
        return;
    }

    const newUser = new User({
        username,
        password,
        logindate: new Date().toUTCString()
    });

    // 注册时，md5(Math.random() * 1000)生成id
    // 返回
    newUser.save( (err) => {
        if ( err ) {
           throw new Error('保存失败');
        }
    })
    
    ctx.body = {
        msg: '注册成功',
        code: 0,
        data: {}
    }
}

module.exports = register