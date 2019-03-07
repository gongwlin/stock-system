const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const mode = process.env.NODE_ENV === 'development' ?


module.exports = {
    entry: {
        app: [path.resolve(__dirname, '../index'), `webpack-dev-server/client?http://0.0.0.0:3000`,
        'webpack/hot/dev-server'],
    },
    output:{
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['*','.js','.jsx','.less']
    },
    module: {
        rules: [
            {
                test:/.less$/,
                use: ['css-loader','less-loader','postcss-loader']
            },
            {
                test: /.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'../index.html'),
            title: 'node forum',
            filename: 'index.html',
            minify: {
                collapseWhitespace: true, //把生成的html空格去掉，减少空间
            }
        })
    ]
}