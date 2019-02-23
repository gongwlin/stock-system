// const express = require('express');
// const router = express.Router();

// router.post('',function(req,res) {
//     console.log('req.body',req.body);
//     const { usm, pwd } = req.body;
//     console.log('router',usm,pwd);
//     res.setHeader('Access-Control-Allow-Origin','*');
//     res.send('aaaaa');
// });
const Data = require('../model/data');
const router = require('koa-router')();


const create = async (ctx) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    const id = ctx.session.id;
    // 查找到id的人
    ctx.body = 'data'
}

const retrive = async (ctx) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    const id = ctx.session.id;
    // 查找到id的人
    ctx.body = 'data'
}

const updata = async (ctx) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    const id = ctx.session.id;
    // 查找到id的人
    ctx.body = 'data'
}

const remove = async (ctx) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    const id = ctx.session.id;
    // 查找到id的人
    ctx.body = 'data'
}

// router.post('/create',create)

module.exports = retrive