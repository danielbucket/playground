const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
	devtool: 'source-map',
	entry: './src/index.js',
	output: {
		filename: 'main.[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		clean: true,
	},

	plugins: [
		new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
		new HtmlWebpackPlugin({
			title: 'BucketLab',
			filename: 'index.html',
			template: 'templates/app_template.hbs',
			description: 'BucketLab',
			minify: true,
			chunks: ['main'],
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
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