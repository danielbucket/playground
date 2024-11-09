const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = (env) => {
	return {
		mode: 'production',
		entry: './src/index.js',
		output: {
			filename: 'main.[contenthash].js',
			path: path.resolve(__dirname, 'dist'),
			publicPath: '/',
			clean: true,
		},
		devtool: 'source-map',
		optimization: {
			splitChunks: {
					chunks: 'all',
					minSize: 1000,
					automaticNameDelimiter: '_'
			}
		},
		plugins: [
			new Dotenv(),
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify('production')
			}),
			new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
			new HtmlWebpackPlugin({
				title: 'BucketLab',
				filename: 'index.html',
				template: 'templates/app_template.hbs',
				description: 'A personal portfolio and a home lab for my web development and IoT projects.',
				minify: true,
				chunks: ['main'],
			})
		],
		module: {
			rules: [
				{
					test: /\.css$/,
					exclude: /node_modules/,
					use: [MiniCssExtractPlugin.loader, 'css-loader']
				},
				{
					test: /\.(png|svg|jpg|jpeg|gif)$/i,
					exclude: /node_modules/,
					type: 'asset/resource',
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
			]
		}
	}
}