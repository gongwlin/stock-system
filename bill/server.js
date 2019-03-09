'use strict';
const path = require('path');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');
const colors = require('colors');
const compiler = Webpack(webpackConfig);

   
const server = new WebpackDevServer(compiler, {
    stats: { colors: true, },
    contentBase: path.resolve(__dirname,'dist'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    open: true,
    port:3000,
    overlay: true
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Starting server on http://localhost:3000'.cyan);
});