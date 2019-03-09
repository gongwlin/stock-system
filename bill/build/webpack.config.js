const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080/',
        'webpack/hot/dev-server',
        path.resolve(__dirname,'../src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '',
        filename: 'bundle.js',
        chunkFilename: 'chunk.bundle.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname,'../src'),
                loader: 'babel-loader',
                exclude: /\/node_modules/
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, '../src'),
                exclude: /\/node_modules/,

                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                exclude: /\/node_modules/,
                include: path.resolve(__dirname, '../src'),
                use: ['style-loader','css-loader','less-loader']
            },
            // {
            //     test: /\.(png|jpg|gif)$/i,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 limit: 8192
            //             }
            //         }
            //     ]
            // },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    limit: 8192,
                    name: `/assets/[name].[hash:4].[ext]`
                }
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        publicPath: '',
        open: true,
        hot: true,
        port: 3000,
        stats: { colors: true },
        inline: true
    },
    plugins: [
        new HtmlWebpackPlugin({  
            title: 'bill',
            filename: 'index.html',
            template: path.resolve(__dirname,'../index.html'),
            minify: {
                // collapseWhitespace: true, //把生成的html空格去掉，减少空间
            },
            // hash: true, //为了更好的 cache，可以在文件名后加个 hash。
        }),
        new CleanWebpackPlugin(['./dist']),//实例化，参数为目录
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}
