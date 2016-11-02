let ExtractTextPlugin = require('extract-text-webpack-plugin');
let multi = require("multi-loader");

let extractCSS = new ExtractTextPlugin('[name].css');
let extractCSS_theme1 = new ExtractTextPlugin('[name].theme1.css');

module.exports = {
  entry: "./index.js",
  output: {
    path: 'dist',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.scss$/i, loader: multi(
        extractCSS.extract(['css', 'sass']),
        extractCSS_theme1.extract(['css', 'sass', 'webpack-append?@import "vars.theme1";'])
      )},
    ]
  },
  plugins: [
    extractCSS,
    extractCSS_theme1
  ]
};