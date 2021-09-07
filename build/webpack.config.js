const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: "./src/editor.ts",
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "bundle.js",
  },
  devtool: "source-map",
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
        }
      ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
};
