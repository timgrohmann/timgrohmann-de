const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const dev = true;


module.exports = {
  mode: 'development',
  module: {
    rules: [

      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          dev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false } },
          'stylus-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader'
      },
    ]
  },
  entry: ['./src/index.js'],
  output: {
    filename: '[name].app.[hash].js'
  },
  plugins: [
    // make sure to include the plugin for the magic
    //new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'app.[hash].css',
      chunkFilename: '[id].css'
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: true
    }),
    new webpack.DefinePlugin({
      "process.env.VERSION_NUMBER": JSON.stringify(require('./package.json').version)
    }),
    new CopyWebpackPlugin([{ from: 'static', to: '.' }])
  ]
}
