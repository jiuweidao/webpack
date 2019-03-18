const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        //自动生成index.html文件、、、、、
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    output: {
        //文件名必须是动态生成的，不然会文件名冲突
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
}
;