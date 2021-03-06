const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const apiMocker = require('mocker-api');
const webpack = require('webpack');
const net = require('net')
// 获取是否开启反向代理的变量
const isProxy = process.env.PROXY === 'true';



module.exports = merge(common, {
    devtool: 'inline-source-map',// 使用 source map
    devServer: {
        contentBase: path.join(process.cwd(), "dist"),
        compress: true,
        hot: true,
        // historyApiFallback: true,   // 解决手动输入url问题
        // lazy: true,
        // filename: "index.js",
        host: "0.0.0.0",
        open: true,
        overlay: true, // 编译出现错误时，将错误直接显示在页面上
        port: 8008,
        proxy: {
            '/private':{
                target: 'http://127.0.0.1:7001',
                // pathRewrite: { '^/private': '' },
                // changeOrigin: true,     // target是域名的话，需要这个参数，
                secure: false,          // 设置支持https协议的代理
            }
        },// 代理
        stats: 'errors-only',
        // useLocalIp: true
        progress: true, // 显示打包进度
        before(app) {
            if (!isProxy) {
                apiMocker(app, path.resolve(process.cwd(), "mock/api.js"), {
                    proxy: {},
                    changeHost: true,
                    watchContentBase: true
                })
            } 
        }
    },
    module:{
        rules:[
            {
                test: /\.less|css$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                },
                {
                    loader: 'css-loader', // translates CSS into CommonJS
                    options: {
                        modules: true,  // 打开 CSS Modules 功能。
                        import: true,
                        url: true,
                        sourceMap: true,

                    },
                },
                {
                    loader: 'less-loader', // compiles Less to CSS
                    options: {
                        // modifyVars: {
                        //     'primary-color': '#1DA57A',
                        //     'link-color': '#1DA57A',
                        //     'border-radius-base': '2px',
                        // },
                        javascriptEnabled: true,   // less 引入 @import ”~...“
                    }

                }],
            },
        ]
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: process.env.NODE_ENV,
        //     }
        // }),
    ],
    mode:'development'
});