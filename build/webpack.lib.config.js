const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: "./src/editor.ts",
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "simpleEditor.js",
    library: {
      name: 'simpleEditor',
      type: 'umd',
      export: 'default',
    }
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
      },
      {
        test: /\.(jpg|png|gif|woff|woff2|svg|ttf|eot)$/,
        use: [ 'url-loader' ]
      },
      {
        test: /\.css$/,
        use: [ 'css-loader' ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  resolve: {
    extensions: [ '.ts', '.js', '.json' ] // webpack 默认只会解析['.js', '.json', '.wasm']
  }
};
