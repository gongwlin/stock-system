const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const session = require('koa-session');
const app = new Koa();
const router = new Router();
const server = require('./server/connect');
const json = require('koa-json');

app.keys = ['This key only used by this project!'];

app
    .use(session(app))
    .use(bodyParser())
    .use(json())
    .use(router.routes())
    // .use(router.allowedMethods());


app.listen(3000, function () {
    console.log('listening');
});

router.post('/login', require('./router/login'));
router.post('/register', require('./router/register'));
router.get('/register', require('./router/register'));
router.get('/data', require('./router/data'));