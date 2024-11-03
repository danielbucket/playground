const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = (env) => {
	console.log('NODE_ENV: ', env)
	const paths = {
		DIST: path.resolve(__dirname, 'dist'),
		SRC: path.resolve(__dirname, 'src'),
		ENTRIES: path.resolve(__dirname, 'src/pages'),
		TEMPLATES: path.resolve(__dirname, 'src/templates'),
		PUBLIC_PATH: process.env.PUBLIC_PATH || '/',
	}

	if (!env?.NODE_ENV) {
		console.log('NODE_ENV not set')
		process.exit(1)
	}

	if (env.NODE_ENV !== 'development' && env.NODE_ENV !== 'production') {
		console.log('NODE_ENV must be set to either development or production')
		process.exit(1)
	}

	const inDev = env.NODE_ENV === 'development'
	const mode = inDev ? 'development' : 'production'
		console.log('Compile Mode @ Webpack: ', mode)

	return {
		mode: mode,
		devtool: inDev ? 'inline-source-map' : false,
		entry: {
			home: './src/root.router.js',
			shared: ['react', 'react-dom'],
		},
		output: {
			filename: '[name].[contenthash].js',
			path: paths.DIST,
			publicPath: '/static/',
			clean: true,
		},
	
		plugins: [
			new Dotenv(),
			new HtmlWebpackPlugin({
				title: 'My Playground',
				description: 'A personal portfolio and a playground for my web development and IoT projects',
				filename: 'playground.html',
				template: path.join(paths.TEMPLATES, 'app_template.hbs'),
			}),
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV),
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
}