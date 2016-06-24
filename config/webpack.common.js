var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './client/polyfills.ts',
    'vendor': './client/vendor.ts',
    'app': './client/main.ts'
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts'
      }, {
        test: /\.html$/,
        loader: 'html'
      }, {
        test: /\.(svg|woff|woff2|ttf|eot)$/,
        loader: 'file?name=assets/fonts/[name].[hash].[ext]'
      }, {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        loader: 'file?name=assets/images/[name].[hash].[ext]'
      }, {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'client/index.html'
    })
  ]
};
