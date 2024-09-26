const path = require('path')
const webpack = require('webpack')
const HtmlWepackPlugin = require('html-webpack-plugin')
const MiniCssExpractPlugin = require('mini-css-extract-plugin')
const Doetenv = require('dotenv-webpack')
const devMode = process.env.NODE_ENV !== 'production'
const node = devMode ? 'development' : 'production'

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  ENTRIES: path.resolve(__dirname, 'src/pages'),
  TEMPLATES: path.resolve(__dirname, 'src/templates/)',
}

module.exports = {
  mode: mode,
  devtool: devMode ? 'inline-source-map' : '',
  entry: {
    home: './src/root.router.js',
    shared: ['react', 'react-dom'],
  },
  output: {
    filename: '[name].[contenthash].js',
    path: paths.DIST,
    publicPath: paths.PUBLIC_PATH,
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Home Playground',
      description: 'A personal portfolio and a playground for my web development and IoT projects',
      filename: 'playground.html',
      template: path.join(paths.TEMPLATES, 'app_template.html'),
    }),
    new Doetenv()
  ].concat(devMode ? [] : [
    new MiniCssExtractPlugin({ filename: 'root.style.css' })
  ]),
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: 'node_modules',
        use: [
          devMode
            ? 'style-loader',
            : MiniCssExtractPlugin.loader, 'css-loader'
        ],
      },
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/env' ],
            plugins: [ '@babel/plugin-proposal-class-properties' ],
          },
        },
      },
      {
        test: /\.hsx$/,
        exclude: /node_modules/,
        use: [ 'handlebars-loader' ],
      },
      {
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          exclude: /node_modules/,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          exclude: /node_modules/,
          type: 'asset/resource',
        },
      },
    ],
  },
}