// const express = require('express');

var express = require('express');
var app = express();
const login = require('./router/login')


let count = 0;

var cb0 = function (req, res, next) {
    console.log('CB0')
    next()
}

var cb1 = function (req, res, next) {
    console.log('CB1')
    next()
}

app.set('view engine','pug');


app.get('/example/d', [cb0, cb1], function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next()
}, function (req, res,next) {
    // res.send('Hello from D!');
    res.render('index', { title: 'hello',message: 'how are you?' });
    next();
},function(req,res) {
    console.log('AAAAAAAAAAAAA'); 
})


app.use('/login',login)

app.get('/', function (req, res) {
    console.log('count Times: ', count++);

    res.redirect(302,'/user/gongwlin/1');
    // res.send('Hello World!');
    res.download('./test.html','a.html',function (err) {
        if(err){
            console.log('error');
        }else{
            console.log('finish')
        }
    });
});

app.get('/user/:id/:name', function(req,res) {
    console.log('res.params',  req.params);
    res.send('end');
})


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
