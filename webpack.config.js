const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './contact-form.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
                    ["@babel/plugin-proposal-class-properties", { "loose": true }],
                    "@babel/plugin-syntax-import-assertions"]
          }
        }
      },
      {
        test: /\.css$/,
        loader: 'lit-css-loader',
        exclude: /node_modules/,
       
      }
    ]
    
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunksSortMode: 'none',
      template: 'index.html'
    }),
],
};