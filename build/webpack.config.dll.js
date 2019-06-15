const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
    mode: 'production',
    devtool: false,
    entry: {
        react: [
            'react',
            'react-dom',
            'react-router-dom',
        ],
        common: [
            'axios',
            'moment'
        ]
    },

    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'lib/[name].dll.js',
        library: '[name]'
    },

    performance: {
        hints: false,
        maxAssetSize: 300000, //单文件超过300k，命令行告警
        maxEntrypointSize: 300000, //首次加载文件总和超过300k，命令行告警
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                // 开启多线程并行
                parallel: true
            }),
        ]
    },

    plugins: [
        new CompressionPlugin(),       
        new webpack.DllPlugin({
            context: __dirname,
            path: path.join(__dirname, '../dist/lib', '[name]-manifest.json'),
            name: '[name]'
        })
    ]
}
