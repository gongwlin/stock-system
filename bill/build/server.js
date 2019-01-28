const path = require('path');
const webpack = require('webpack');
const getConfig = require('./webpack.config');
const webpackServer = require('webpack-dev-server');
const colors = require('colors')
const compiler = webpack(getConfig);

const app = new webpackServer(compiler,{
    
})

app.listen(3000,"localhost",function(err) {
    if (err) {
        console.log(err)
    }
    console.log('listening http://localhost:3000'.cyan);
})
console.log('1111111'.red);