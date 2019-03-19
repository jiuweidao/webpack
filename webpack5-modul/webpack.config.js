const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        //自动生成index.html文件、、、、、
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        //该插件会根据output路径自动识别输出文件，并删除历史文件，只保留最新构建
        new CleanWebpackPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()

    ],
    mode: "production",
    output: {
        //文件名必须是动态生成的，不然会文件名冲突
        filename: '[name].bundle.js',
        //会根据输出路径自动创建新的文件夹，HtmlWebpackPlugin，CleanWebpackPlugin俩插件会根据输出路径自动选择相应文件进行构建
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
};