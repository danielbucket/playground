const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const path = require('path')

module.exports = (env) => {
  const config = env.development ?
    require('./webpack.dev') : require('./webpack.prod')
    
  return merge(config, {
    mode: env.development ? 'development' : 'production',
    entry: './src/index.js',
    output: {
      filename: 'main.[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      clean: true,
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
				title: 'BucketLab',
				filename: 'index.html',
				template: 'templates/app_template.hbs',
				description: 'A personal portfolio and a home lab for my web development and IoT projects.',
				minify: true,
				chunks: ['main'],
        type: 'module',
			})
    ],
    module: {
      rules: [
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
      ]
    }
  })
}