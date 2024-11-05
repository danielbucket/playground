const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 3648,
    static: {
        directory: path.resolve(__dirname, './dist'),
    },
    hot: true,
    devMiddleware: {
        index: 'playground.html',
    }
  },
  entry: {
    home: './src/root.router.js',
    shared: ['react', 'react-dom'],
  },
  output: {
    filename: '[name].[contenthash].js`',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist',
    clean: true,
  },

  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'playground.html',
      title: 'My Playground',
      description: 'A personal portfolio and a playground for my web development and IoT projects.',
      template: path.resolve(__dirname, 'src/templates/app_template.hbs'),
      minify: false,
    }),
  ],
  
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader", "css-loader",
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
        test: /\.hbs$/,
        exclude: /node_modules/,
        use: ['handlebars-loader'],
      },
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
    ],
  },
}