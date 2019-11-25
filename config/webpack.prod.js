const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
    plugins: [
        new CleanWebpackPlugin(),
        new UglifyJSPlugin(),
        // new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[name].css"
        }),
        
    ],
    //4.0配置
    optimization: {
        usedExports: true,
        runtimeChunk: "single", // webpack运行时代码单独提取为一个包
        splitChunks: {
            chunks: "all",   // 表示哪些代码需要优化，有三个可选值：initial(初始块)、async(按需加载块)、all(全部块)，默认为async
            minSize: 30000,  //  表示在压缩前的最小模块大小，默认为30000
            minChunks: 1,  // 表示被引用次数，默认为1
            maxAsyncRequests: 5,  // 按需加载时候最大的并行请求数，默认为5
            maxInitialRequests: 3, //  一个入口最大的并行请求数，默认为3
            automaticNameDelimiter: '~', // 命名连接符
            name: true, // 拆分出来块的名字，默认由块名和hash值自动生成
            cacheGroups: {  // 缓存组。缓存组的属性除上面所有属性外，还有test, priority,
                vendors: {// 将第三方模块提取出来
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10, // 缓存组打包的先后优先级
                    name: 'vendor',
                    
                },
                styles: {
                    name: 'index',
                    test: /\.(css|less)$/,
                    chunks: 'all',
                    enforce: true,
                },
                async: { // 为异步代码打成一个公共包(在app.js修改一下代码,重新打包,不影响此包hash)
                    name: 'async',
                    chunks: 'async', // 为异步代码打包
                    minChunks: 1,
                    minSize: 0
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true  // 如果当前代码块包含的模块已经有了，就不在产生一个新的代码块
                }
            }
        },

        minimizer: [     
            new OptimizeCSSAssetsPlugin({}),
        ],
    },
    module: {
        rules: [
            {
                test: /\.less|css$/,
                use: [{
                    loader:MiniCssExtractPlugin.loader
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
                        // modifyVars: {},
                        javascriptEnabled: true,   // less 引入 @import ”~...“
                    }

                }],
            },
        ]
    },
    mode:'production'
});