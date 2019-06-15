const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const getBaseConfig = require('./webpack.config.base')
const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin')

function getProdConfig() {
    const webpackBaseConfig = getBaseConfig()
    console.log('webpackBaseConfig', webpackBaseConfig)
    return webpackMerge(webpackBaseConfig, {
        mode: 'production',
        devtool: false,
        performance: {
            hints: 'warning',
            maxAssetSize: 300000, //单文件超过250k，命令行告警
            maxEntrypointSize: 300000 //首次加载文件总和超过250k，命令行告警
        },

        optimization: {
            splitChunks: {
                chunks: 'all'
            },
            minimizer: [
                new TerserPlugin()
            ],

            noEmitOnErrors: true
        },

        plugins: [
            new BundleAnalyzerPlugin(),
            new CompressionPlugin(),
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('../dist/lib/react-manifest.json')
            }),
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('../dist/lib/common-manifest.json')
            })
        ]
    })
}



async function build() {
    return new Promise(async (resolve, reject) => {
        const webpackConfig = getProdConfig()

        webpack(webpackConfig, (err, stats) => {
            process.stdout.write(
                stats.toString({
                    colors: true,
                    modules: false,
                    children: false,
                    chunks: true,
                    chunkModules: false
                }) + '\n\n'
            )
            if (err) {
                console.log(err)
                reject(err)
            }
            return resolve()
        })
    })
}


build().then(()=>{})
