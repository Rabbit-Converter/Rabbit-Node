const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    "rabbit": path.resolve(__dirname, 'lib')+"/rabbit.js",
    "rabbit.min": path.resolve(__dirname, 'lib')+ "/rabbit.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'dist'),
	  library:"Rabbit",
	  libraryTarget:"var"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: "source-map",
  plugins: [
    new UglifyJSPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
}
