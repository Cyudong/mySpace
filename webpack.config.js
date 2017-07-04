var webpack = require('webpack');
module.exports = {
    entry: [
      'webpack/hot/only-dev-server',
      "./src/index.jsx"
    ],
    output: {
        path: './build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.(js|jsx)?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    resolve:{
        extensions:['','.js','.jsx','.css','.json']
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]
};