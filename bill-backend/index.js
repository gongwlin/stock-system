const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const server = require('./server/connect');

app.use(bodyParser());

//  登入接口，调用login中间件处理
// app.use('/login', bodyParser.json(),require('./router/login'));

// const login = ctx => {
//     console.log('ctx',ctx.url);
//     ctx.body = 'login';
// }


// app.post('/login', function (req, res) {
//     console.log('req.body', req.body);
//     const { usm, pwd } = req.body;
//     console.log('router', usm, pwd);
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.send('aaaaa');
// });


router.post('/login', require('./router/login'));
router.post('/register', require('./router/register'));
router.get('/data', require('./router/data'));

app
    .use(router.routes())
    .use(router.allowedMethods());


app.listen(3000, function () {
    console.log('listening');
});
