# Webpack 打包管理

```javascript
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "watch": "webpack --watch"，//需要手动刷新浏览器
    "start": "webpack-dev-server --open",//指定路径
    "server": "node server.js",
    "build": "webpack"
  },
```
## 1.watch
webpack watch 会自动跟新构建文件，但是需要浏览器重新出刷新

## 2.start
* start会自动跟新构建文件
* 自动刷新浏览器
* 需指定文件路径
  devServer: {             contentBase: './dist    }

## 3.server
 * 自己指定打包方式
 * 需指定打包文件位置     publicPath: '/'

## 4.build
build 打包会产生输出文件，HtmlWebpackPlugin插件会自动生成index.html
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    devtool: 'inline-source-map',
    devServer: {
             contentBase: './dist'
   },
    plugins: [
        //自动生成index.html文件、、、、、
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        //该插件会根据output路径自动识别输出文件，并删除历史文件，只保留最新构建
        new CleanWebpackPlugin(),

    ],
    output: {
        //文件名必须是动态生成的，不然会文件名冲突
        filename: '[name].bundle.js',
        //会根据输出路径自动创建新的文件夹，HtmlWebpackPlugin，CleanWebpackPlugin俩插件会根据输出路径自动选择相应文件进行构建
        path: path.resolve(__dirname, 'dist'),
    },
};
```
