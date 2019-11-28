const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const public = []
const utilFiles = fs.readdirSync(path.join(process.cwd(), 'src/util'));
const assetsStylesFiles = fs.readdirSync(path.join(process.cwd(), 'src/assets/styles'));

utilFiles.forEach(file => {
    public.push(
        path.resolve(process.cwd(), 'src/util', file)
    )
})

if (assetsStylesFiles[0] === '.DS_Store') assetsStylesFiles.splice(0, 1);
assetsStylesFiles.forEach(file => {
    public.push(
        path.resolve(process.cwd(), 'src/assets/styles', file)
    )
})

module.exports = {
    mode:'production',
    entry: {
        react: ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux', 
            'redux-saga', 'redux-devtools-extension','redux-saga/dist/redux-saga-effects-npm-proxy.esm.js'],
        antd: ['antd'],
        lodash: ['lodash'],
        public,
        other: ['core-js', 'babel-polyfill', 'qs']
    },
    output: {
        filename: '[name].dll.js',
        path: path.resolve(process.cwd(), 'dll'),
        library:'[name]'
    },
    plugins: [
        new CleanWebpackPlugin({
            dry: false, // 默认false  dry为true时，模拟删除，加删除，不会真的删掉文件
            verbose: false, // 默认false verbose为true时 显示日志， 当dry为true时，总是会打印日志，不管verbose是什么值
            // cleanStaleWebpackAssets: true, // 自动删除未被使用的webpack资源
            cleanOnceBeforeBuildPatterns: [
                path.resolve(process.cwd(), 'dll'),
            ],
        }),
        new webpack.DllPlugin({
            name: '[name]',
            path: path.resolve(process.cwd(), 'dll/[name].manifest.json')
        }),
        
    ],
    module:{
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.less|css$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                },
                {
                    loader: 'css-loader', // translates CSS into CommonJS
                   
                },
                {
                    loader: 'less-loader', // compiles Less to CSS
                }],
            },
        ]
    }
    
}