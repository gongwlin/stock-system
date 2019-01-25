const path = require('path');
const webpack = require('webpack');
const getConfig = require('./webpack.config');
const webpackServer = require('webpack-dev-server');
const chalk = require('chalk');

const compiler = webpack(getConfig);

const app = new webpackServer(compiler,{
    publicPath: getConfig.output.publicPath,
    hot: true,
    host: '127.0.0.1',
    open: true
})

app.listen(3000,"localhost",function(err) {
    if (err) {
        console.log(err)
    }
})

console.log('listening at http://localhost:3000'.red)