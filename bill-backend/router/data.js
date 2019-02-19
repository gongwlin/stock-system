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



const data = async (ctx) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    // console.log('ctx.query', ctx.query);
    
    console.log('11111');
    ctx.body = 'data'
}


module.exports = data