const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
	output: {
		filename: 'main.[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		clean: true,
	},
  devtool: 'inline-source-map',
  devServer: {
    port: 3648,
    static: {
        directory: path.resolve(__dirname, 'dist')
    },
    // client: {
    //   progress: true
    // },
    hot: true,
    devMiddleware: {
      index: 'index.html',
      writeToDisk: true,
      // serverSideRender: true
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'BucketLab',
      filename: 'index.html',
      description: 'A personal portfolio and a home lab for my web development and IoT projects.',
      template: 'templates/app_template.hbs',
      minify: false
    })
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
        test: /\.(?:js|jsx|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            targets: "defaults",
            presets: [
              ["@babel/preset-env"],
              ["@babel/preset-react"]
            ],
            plugins: [
              ["@babel/transform-class-properties"],
              ["@babel/plugin-transform-runtime"]
            ]
          }
        }
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