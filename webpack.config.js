/* eslint-disable */
const webpack = require('webpack');
var path = require('path');
const context = path.resolve(__dirname, 'src');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].js'
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  module: {
    loaders: [
      {
        include: path.resolve(__dirname, './src'),
        loader: 'babel-loader',
        query: {
          plugins: [
            'transform-react-jsx', [ 'react-css-modules', { context } ]
          ]
        },
        test: /\.js$/
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, './src'),
        use: [
          { loader: 'style-loader', options: { singleton: true } },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              minimize: true,
              localIdentName: '[name]_[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: (loader) => [
                require('postcss-modules-values')(),
                require('postcss-nested')(),
                require('postcss-cssnext')()
              ]
            }
          }
        ]
      },
      {
        loader: 'file-loader?name=fonts/[name].[ext]',
        test: /\.(woff|woff2|eot|ttf|svg)$/
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: './.env',
      systemvars: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      title: 'Swansong'
    }),
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};
