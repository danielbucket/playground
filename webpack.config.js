const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')

// node_env is not being set in the webpack.config.js file
// --mode=production flag is being used, but webpack.config isn't reading it

const { MODE } = process.env
// true == development, false == production
const inDev = MODE !== 'development'
const mode = inDev ? 'development' : 'production'

const paths = {
	DIST: path.resolve(__dirname, 'dist'),
	SRC: path.resolve(__dirname, 'src'),
	ENTRIES: path.resolve(__dirname, 'src/pages'),
	TEMPLATES: path.resolve(__dirname, 'src/templates'),
	PUBLIC_PATH: process.env.PUBLIC_PATH || '/',
}

module.exports = {
	mode: mode,
	devtool: inDev ? 'inline-source-map' : false,
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
		new Dotenv(),
		new HtmlWebpackPlugin({
			title: 'Home Playground',
      description: 'A personal portfolio and a playground for my web development and IoT projects',
      filename: 'playground.html',
      template: path.join(paths.TEMPLATES, 'app_template.hbs'),
		}),
	].concat(!inDev ? new MiniCssExtractPlugin({ filename: 'playground.style.css' }) : []),
  
	module: {
		rules: [
	    {
	      test: /\.css$/,
				exclude: /node_modules/,
	      use: [
	      	inDev ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader",
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