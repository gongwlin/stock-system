// const express = require('express');
// const router = express.Router();

// router.post('',function(req,res) {
//     console.log('req.body',req.body);
//     const { usm, pwd } = req.body;
//     console.log('router',usm,pwd);
//     res.setHeader('Access-Control-Allow-Origin','*');
//     res.send('aaaaa');
// });


const User = require('../model/user');

const login = async (ctx) => {
    ctx.set('Access-Control-Allow-Origin', '*');

    const { username, password } = ctx.request.body;
    // console.log('{ username, password }', username, password);
    const result = await User.find({ username, password} );
    if ( result && result.length === 0 ) {
        ctx.body = {
            code: 1,
            msg: '用户名或密码错误',
            data: {}
        };
        return ;
    }
    ctx.body = {
        code: 0,
        msg: '登录成功',
        data: {}
    }
}

module.exports = login