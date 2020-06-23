/* eslint-disable */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
var pkg = require('./package');
/* eslint-enable */

var __DEV__ = process.env.NODE_ENV === 'development';
var filename = __DEV__ ? '[name].js' : '[name].min.js';

module.exports = {
  entry: {
    examples: path.resolve(__dirname, './examples/index.tsx'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  output: {
    path: path.join(__dirname, './build'),
    filename,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: 'babel-loader?babelrc',
        exclude: /node_modules/,
        // https://github.com/babel/babel-loader#options
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.(less|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|png|jpg|gif)($|\?)/,
        use: [
          {
            loader: 'url-loader?limit=1&hash=sha512&digest=hex&size=16&name=resources/[hash].[ext]',
          },
        ],
      },
    ],
  },
  devServer: {
    writeToDisk: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // generate html
      template: 'examples/index.html',
      templateParameters: {
        version: `${pkg.version}`,
        publishDate: `Last UpdateTime: ${new Date().toString()}`,
      },
      inject: 'body',
      favicon: 'examples/favicon.ico',
      minify: {
        collapseWhitespace: true,
        removeComments: false, // 不删除注释，用于显示版本号和构建时间
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin(), // extract css into separate files
    new ForkTsCheckerWebpackPlugin({
      // babel-typescript 不做类型检查，所以用这个, 并且在tsconfig include 了example和src两个目录
      async: false,
      silent: true,
      formatter: 'codeframe',
      tsconfig: path.join(__dirname, './tsconfig.json'),
    }),
  ],
  ...(!__DEV__ && {
    optimization: {
      // minify js
      minimizer: [new UglifyJsPlugin()],
    },
  }),
  ...(__DEV__ && {
    devtool: 'source-map',
  }),
};
