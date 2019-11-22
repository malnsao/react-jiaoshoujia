const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[id].async.js',
        path: path.resolve(process.cwd(), 'dist')
    },
    module: {
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
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(process.cwd(), './src/assets/template.html')
        })
    ],
    stats: 'errors-only',
    resolve:{
        alias:{
            '@': path.resolve(process.cwd(), 'src'),  // 配置相对路径
            // 'antd': path.resolve(process.cwd(), 'node_modules/antd'),
        }
    }
};






// filename: (chunkData) => {
        //     console.log(chunkData.chunk.name)
        //     return chunkData.chunk.name === 'index' ? '[id].[name].js' : '[name].async.js';
        // },


        // chunkFilename: (chunkData) => {
        //     console.log(chunkData.chunk.name)
        //     return chunkData.chunk.name === 'index' ? '[id].[name].js' : '[name].async.js';
        // },