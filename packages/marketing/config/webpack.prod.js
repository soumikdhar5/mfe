const {merge} = require("webpack-merge");
const ModuleFderationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const packageJson = require("../package.json")
const commonWebpack = require('./webpack.common')

const marketingProd = {
    mode:'development',
    output:{
        filename:'[name].[contenthash].js'
    },
    plugins:[
        new ModuleFderationPlugin({
            name:'marketing',
            filename:'remoteEntry.js',
            exposes:{
                "./MarketingApp":"./src/bootstrap"
            },
            shared:packageJson.dependencies
        })
    ]
}

module.exports = merge(commonWebpack,marketingProd)