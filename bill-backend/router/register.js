const User = require('../model/user');
const md5 = require('md5');


const register = async (ctx) => {
    ctx.set('Access-Control-Allow-Origin', 'locahost:3000');
    // ctx.set('Access-Control-Allow-Credentials',true);
    const { username, password } = ctx.request.body;
    const findResult = await User.findOne({'username':username})
    if ( findResult ) {
        ctx.body = {
            msg: '用户名重复',
            data: {},
            code: 1
        }
        return;
    }

    const id = md5(Math.random() * 1000);
    console.log('id',id);
    const newUser = new User({
        username,
        password,
        logindate: new Date().toUTCString(),
        id
    });

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