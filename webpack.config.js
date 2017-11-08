var path = require('path')
var webpack = require('webpack')
var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

module.exports = {
    entry: './src/index.js',//值可以是字符串、数组或对象
    output: {
        path: path.resolve(__dirname, './build'),//Webpack结果存储
        publicPath: '/build/',//懵懂，懵逼，//然而“publicPath”项则被许多Webpack的插件用于在生产模式和开发模式下下更新内嵌到css、html，img文件里的url值
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.css$/, 
                loader: 'style-loader!css-loader' 
            }
            ,
            {
                test: /\.less$/,
                 loader: 'style-loader!css-loader!less-loader' 
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: { //webpack-dev-server配置
        historyApiFallback: true, //不跳转
        noInfo: true,
        inline: true, //实时刷新
        hot: true,
        quiet: true, // lets WebpackDashboard do its thing
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map',
    plugins: [
        new DashboardPlugin(dashboard.setData)
    ]
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        // new DashboardPlugin(dashboard.setData)
    ])
}
