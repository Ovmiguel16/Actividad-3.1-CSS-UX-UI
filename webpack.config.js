const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpack = require('css-minimizer-webpack-plugin')

module.exports = {
  entry: './src/funcionalidades.js',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
  },
  optimization: {
    minimizer: [
        new CssMinimizerWebpack()
    ]
  },
  module: {
    rules: [
      {
        test: /\.css/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        hash: true,
    }),
    new MiniCssExtractPlugin({
        filename: 'style.css'
    }),
]
};