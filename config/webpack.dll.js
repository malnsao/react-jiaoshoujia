const path = require('path');
const webpack = require('webpack');
module.exports = {
    mode:'production',
    entry: {
        react: ['react','react-dom','react-router-dom','redux','react-redux','antd'],
        vendors:['lodash'],
        // mock: ['mocker-api']
    },
    output: {
        filename: '[name].dll.js',
        path: path.resolve(process.cwd(), 'dll'),
        library:'[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]',
            path: path.resolve(process.cwd(), 'dll/[name].manifest.json')
        })
    ]
}