const path = require('path')
const webpack = require('webpack');
const webpackMerge = require('webpack-merge')
const getBaseConfig = require('./webpack.config.base')
const webpackDevServer = require('webpack-dev-server')
function devConfig () {
    const webpackBaseConfig = getBaseConfig()
     return webpackMerge(webpackBaseConfig, {
        mode: 'development',
        devtool: '#source-map',
        optimization: {
            namedModules: true, //取代插件中的 new webpack.NamedModulesPlugin()
            namedChunks: true
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    })
}


const webpackConfig = devConfig()
const port = 3000

const options = {
    publicPath: getBaseConfig().output.publicPath,
    contentBase: path.join(__dirname, '../dist'),
    host: '0.0.0.0',
    stats: { colors: true },
    hot: true,
    noInfo: false,
    disableHostCheck: true,
    historyApiFallback: true
}
webpackDevServer.addDevServerEntrypoints(webpackConfig, options)

const compiler = webpack(webpackConfig)
const server = new webpackDevServer(compiler, options)

server.listen(port, '0.0.0.0', function(err) {
    if (err) {
        console.error(err)
    }
    console.log('\n-------------\n')
    console.log(`http://127.0.0.1:${port}`)
})