var path = require('path');
var webpack = require('webpack');
var glob = require('glob');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');

var getEntry = function() {
    var entry = {};
    //读取开发目录,并进行路径裁剪
    glob.sync('./src/**/*.js')
        .forEach(function(name) {
            var start = name.indexOf('src/') + 4,
                end = name.length - 3;
            var n = name.slice(start, end);
            n = n.slice(0, n.lastIndexOf('/'));
            //保存各个组件的入口
            entry[n] = name;
        });
        console.log(entry)
    return entry;
};

module.exports = {
    entry: path.resolve(__dirname, "./src/baobab"),
    // entry: getEntry(),
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "js/index.js",
        // filename: '[name].[hash:8].js',
        // path: './build/__bundle_build__', 
        publicPath: '/' 
    },
    resolve: {
        //配置项,设置忽略js后缀
        extensions: ['', '.js', '.less', '.css', '.png', '.jpg']
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }

            }, {
                test: /\.less/,
                loader: 'style-loader!css-loader!less-loader'
            }, {
                test: /\.(css)$/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url?limit=10000&name=images/[name].[ext]'
            }, {
                test: /\.jsx$/,
                loaders: ['jsx', 'babel?presets[]=es2015,presets[]=react']
            }, {
                test: /\.html$/,
                loader: 'html?attrs=img:src img:srcset'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new HtmlWebpackPlugin({
        //   title: 'Hello World app',
        //   filename: 'index.html',
        //   template: './index.html',
        //   inject: true,
        //   hash: true,
        //   // minify:{ //压缩HTML文件
        //   //   removeComments:true,    //移除HTML中的注释
        //   //   // collapseWhitespace:true    //删除空白符与换行符
        //   // }
        // }),
        new webpack.optimize.UglifyJsPlugin({    //压缩代码
           compress: {
               warnings: false
           },
           except: ['$super', '$', 'exports', 'require']    //排除关键字
        }),
        new CleanPlugin(['./build'])
    ]
};