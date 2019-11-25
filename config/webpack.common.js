const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const webpack = require('webpack');

const makePlugin = (config) => {

    const plugins = [
        new HtmlWebpackPlugin({
            template: path.join(process.cwd(), './src/assets/template.html')
        }),
    ]
    const files = fs.readdirSync(path.join(process.cwd(), 'dll'));

    files.forEach(file => {
        if (/.*\.dll.js/.test(file)) {
            plugins.push(
                new AddAssetHtmlPlugin({
                    filepath: path.resolve(process.cwd(), 'dll', file)
                }),
            )
        }
        if (/.*\.manifest.json/.test(file)) {
            plugins.push(
                new webpack.DllReferencePlugin({
                    manifest: path.resolve(process.cwd(), 'dll', file)
                }),
            )
        }
    })
    return plugins;
}

const config = {};

config.entry = {
    index: './src/index.js',
}

config.output = {
    filename: '[name].js',
    chunkFilename: '[id].async.js',
    path: path.resolve(process.cwd(), 'dist')
};

config.module = {
    rules: [
        {
            test: /\.(png|svg|jpg|gif)/,
            loader: 'file-loader?limit=8192&name=static/[name].[hash:8].[ext]'
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)/,
            use: [
                'file-loader'
            ],
        },
        {
            test: /.js$/,
            loader: 'babel-loader',
            exclude: [
                path.join(process.cwd(), 'node_modules')
            ],
            query: {
                presets: ['es2015', 'react', 'stage-0'],
            }
        }
    ]
};

config.resolve = {
    alias: {
        '@': path.resolve(process.cwd(), 'src'),  // 配置相对路径
        // 'antd': path.resolve(process.cwd(), 'node_modules/antd'),
    }
}

config.plugins = makePlugin(config);

module.exports = config






// filename: (chunkData) => {
        //     console.log(chunkData.chunk.name)
        //     return chunkData.chunk.name === 'index' ? '[id].[name].js' : '[name].async.js';
        // },


        // chunkFilename: (chunkData) => {
        //     console.log(chunkData.chunk.name)
        //     return chunkData.chunk.name === 'index' ? '[id].[name].js' : '[name].async.js';
        // },



        // stats: 'errors-only',
    // resolve: {
    //     // extensions: ['js'],
    //     // mainFiles: ['index'],
    //     alias: {
    //         '@': path.resolve(process.cwd(), 'src'),  // 配置相对路径
    //         // 'antd': path.resolve(process.cwd(), 'node_modules/antd'),
    //     }
    // }