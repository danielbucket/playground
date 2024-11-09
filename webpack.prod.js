const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	devtool: 'source-map',
	optimization: {
		splitChunks: {
				chunks: 'all',
				minSize: 1000,
				automaticNameDelimiter: '_'
		}
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			}
		]
	}
}