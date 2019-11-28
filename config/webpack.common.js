const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const webpack = require('webpack');

const makePlugin = (config) => {

    const plugins = [
        new HtmlWebpackPlugin({
            template: path.join(process.cwd(), './src/template.html')
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
            // use: [
            //     {
            //         loader: "thread-loader",
            //         // 有同样配置的 loader 会共享一个 worker 池(worker pool)
            //         options: {
            //             // 产生的 worker 的数量，默认是 cpu 的核心数
            //             workers: 2,

            //             // 一个 worker 进程中并行执行工作的数量
            //             // 默认为 20
            //             workerParallelJobs: 50,

            //             // 额外的 node.js 参数
            //             // workerNodeArgs: ['--max-old-space-size', '1024'],

            //             // 闲置时定时删除 worker 进程
            //             // 默认为 500ms
            //             // 可以设置为无穷大， 这样在监视模式(--watch)下可以保持 worker 持续存在
            //             poolTimeout: 2000,

            //             // 池(pool)分配给 worker 的工作数量
            //             // 默认为 200
            //             // 降低这个数值会降低总体的效率，但是会提升工作分布更均一
            //             poolParallelJobs: 50,

            //             // 池(pool)的名称
            //             // 可以修改名称来创建其余选项都一样的池(pool)
            //             name: "my-pool"
            //         },
            //     },

            //     {
            //         loader: 'babel-loader',
            //         query: {	// 此处加上juery的配置
            //             presets: ['es2015', 'react', 'stage-0'],
            //         },
            //     }
            // ],
            exclude: [// 表示哪些目录中的 .js 文件不要进行 babel-loader
                path.join(process.cwd(), 'node_modules') 
            ],
            // query: {
                // presets: ['es2015', 'react', 'stage-0'],
            // },
            // include:[
            //     path.join(process.cwd(), 'src'),
            //     path.join(process.cwd(), 'mock') 
            // ]
        },
        {
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }
    ]
};

config.resolve = {
    extensions: ['.js', '.ts'],
    alias: {
        '@': path.resolve(process.cwd(), 'src'),  // 配置相对路径
        // 'antd': path.resolve(process.cwd(), 'node_modules/antd'),
    },
    // 在当前目录查找
    modules: [path.resolve(process.cwd(), 'node_modules')],
}
// config.exclude = /node_modules/; // 排除不处理的目录

config.plugins = makePlugin(config);

module.exports = config

// exclude: /node_modules/, // 排除不处理的目录
//     include: path.resolve(__dirname, 'src') // 精确指定要处理的目录




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