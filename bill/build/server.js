const path = require('path');
const webpack = require('webpack');
const getConfig = require('./webpack.config');
const webpackServer = require('webpack-dev-server');
const colors = require('colors')
const compiler = webpack(getConfig);

const app = new webpackServer(compiler,{
    hot: true,
    inline:true,
    port: 8080,
    contentBase: path.join(__dirname,'../dist'),
    
})

app.listen(8080,"localhost",function(err) {
    if (err) {
        console.log(err)
    }
    console.log('listening http://localhost:8080'.cyan);
})
console.log('1234')
console.log('1111111'.red);