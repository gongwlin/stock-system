const webpack = require('webpack')
const path = require('path')
const webpackDevServer = require('webpack-dev-server')
const baseConfig = require('./webpack.config.base')
const compile = webpack(baseConfig)