const {merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const ModuleFderationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

const devConfig ={
    mode:'development',
    devServer:{
        port:8081,
        historyApiFallback:{
            index:'/index.html'
        }
    },
    plugins:[
        new ModuleFderationPlugin({
            name:'marketing',
            filename:"remoteEntry.js",
            exposes:{
                "./MarketingApp":"./src/bootstrap"
            },
            shared:packageJson.dependencies,
        }),
    ]
}

module.exports = merge(commonConfig,devConfig)