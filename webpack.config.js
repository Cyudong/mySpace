var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: ['webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            path.resolve(__dirname, './src')
          ],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'jsx-loader?harmony'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    },{
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    },{
      test: /\.js|jsx$/,
      loaders: ['babel?presets[]=es2015,presets[]=react,presets[]=stage-0']
    },{
      test: /\.js|jsx$/,
      loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react,presets[]=stage-0'],
      include: path.join(__dirname, 'js')
    }]
  },
  //其它解决方案配置
  resolve: {
      extensions: ['', '.js', '.json', '.scss']
  },
  //插件项
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
  ]
};