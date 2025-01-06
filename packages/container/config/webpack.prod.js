const {merge } = require('webpack-merge')
const ModuleFderationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const domainName = process.env.PRODUCTION_DOMAIN;

const productionConfig ={
    mode:'production',
    output:{
        filename:'[name].[contenthash].js',
        publicPath:'/container/latest/'
    },
    plugins:[
        new ModuleFderationPlugin({
            name:'container',
            remotes:{
                marketing:`marketing@${domainName}/marketing//remoteEntry.js`
            },
            shared:packageJson.dependencies,

        })
    ]
}

module.exports = merge(commonConfig,productionConfig)