const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/dist/plugin').default

module.exports = {
  entry: "./example/src/main.ts",
  output: {
    path: path.resolve(__dirname, '../demo'),
    filename: "[name].[hash].js"
  },
  devtool: 'eval-source-map',
  devServer: {
      static: {
        directory: path.join(__dirname, "../demo"),
      },
      hot: true,
      watchFiles: ['example/**/*'],
  },
  module: {
      rules: [
        { test: /\.tsx?$/, use: ["ts-loader", "vue-loader"] },
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
      filename: 'index.html',
      template: "./example/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      ignoreOrder: true
    }),
    new VueLoaderPlugin()
  ],
  optimization: {
    // runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all'
    }
  },
  resolve: {
    extensions: [ '.ts', '.vue', '.json', '.js' ], // webpack 默认只会解析['.js', '.json', '.wasm']
    fallback: {
      querystring: require.resolve("querystring-es3")
    },
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
};
