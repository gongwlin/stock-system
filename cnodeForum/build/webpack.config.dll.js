const webpack = require('webpack')
const path = require('path')


const vendors = ['react', 'react-router-dom']
module.exports = {
    entry: {
        vendor: vendors
    },
    mode: 'development',
    output: {
        path: path.join(__dirname,'../dist/lib'),
        filename: 'dll.[name].js',
        library: '[name].[hash:5]',
    },
    plugins:[
        new webpack.DllPlugin({
            path: path.join(__dirname, '../dist/lib/manifest.json'),
            name: '[name].[hash:5]',
            context: __dirname
        })
    ]
}