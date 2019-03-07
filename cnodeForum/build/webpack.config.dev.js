const webpack = require('webpack')
const path = require('path')
const webpackDevServer = require('webpack-dev-server')
const baseConfig = require('./webpack.config.base')
const compile = webpack(baseConfig)

const app = new webpackDevServer(compile, {
    port: 3000,
    hot: true,
    contentBase: path.join(__dirname, '../dist'),
    publicPath: '/',
    open: true
})
// 前端react 3000端口，后端express 5000端口
app.listen(3000, ()=> {
    console.log('listening http://localhost:3000')
})

