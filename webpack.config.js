//webpack.config.js
var webpack = require("webpack");

module.exports = {
    devtool: 'eval-source-map',
    entry: ['webpack/hot/dev-server.js', 
             __dirname + '/src/js/main.js',

    ],

    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
        publicPath:'/',
    },

  module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            
          
        }
      ]
},
    devServer:{
        publicPath:'/',
    },

    plugins: [
     new webpack.HotModuleReplacementPlugin()
    ],

};