const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// JS CSS
module.exports = {
    entry: [
        path.join(__dirname, './src/index.js'),
        `webpack-dev-server/client?http://0.0.0.0:3000`,
        'webpack/hot/dev-server',
    ],

    output: {
        publicPath: '',
        filename: 'bundle.js',
        path: path.resolve(__dirname,'./dist')
    },

    mode: 'development',

    module:{
        rules: [
            {
                test:/.js$/,
                loader: 'babel-loader'
            },
            {
                test: /.css$/,
                loaders: [
                    'style-loader','css-loader'
                ]
            },
            {
                test: /.eot|.woff2?|.ttf|.eot|.svg$/,
                loader: 'file-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'bill',
            filename: 'index.html',
            template: path.join(__dirname,'./index.html')
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin()
    ]
}