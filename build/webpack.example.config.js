const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./example/src/main.ts",
  output: {
    path: path.resolve(__dirname, '../demo'),
    filename: "[name].[hash].js"
  },
  devtool: "source-map",
  devtool: 'eval-source-map',
  devServer: {
      contentBase: path.join(__dirname, "../demo"),
      hot: true
  },
  module: {
      rules: [
        { test: /\.tsx?$/, use: "ts-loader" },
        { 
          test: /\.js/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                exclude: /node_modules/
              }
            }
          ]
        },
        {
          test: /\.vue$/,
          use: [
            'vue-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: [ 'style-loader' , 'css-loader', 'sass-loader' ]
        },
        {
          test: /\.css$/,
          use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
        }
      ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'editor.html',
      template: "./example/editor.html"
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      ignoreOrder: true
  }),
  ]
};
