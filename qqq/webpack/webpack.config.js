const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
module.exports = {
    entry: {
        entry: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),//"path.resolve(__dirname)"是webpack文件夹
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ['env']
                    }
                }],
                exclude: /node_modules/

            },
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    // use: "css-loader"
                    use: [
                        {
                            loader:"css-loader",
                            options:{
                                importLoaders:1
                            }
                        },"postcss-loader"]
                })
            },
            {
                test: /\.scss$/,
                // use:['style-loader','css-loader','sass-loader'],
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            },
            {
                test:/\.(png|gif|jpg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit: 3000000000000,
                            outputPath:'img/'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template: "./src/index.html"
        }),
            new ExtractTextPlugin('css/test.scss'),
            new webpack.BannerPlugin("成哥所有"),
            new ExtractTextPlugin('css/index.css')


    ],
    devServer:{
        contentBase: path.resolve(__dirname,'dist'),
        host:'127.0.0.1',
        port:'8081',
        compress:true
    }
}