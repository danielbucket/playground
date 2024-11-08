const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	mode: 'production',
	target: 'node',
	devtool: 'source-map',
	entry: {
		bucketlab: '/src/root.router.js',
		shared: ['react', 'react-dom'],
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist',
		clean: true,
	},
	optimization: {
		splitChunks: {
				chunks: 'all',
				minSize: 1000,
				automaticNameDelimiter: '_'
		}
	},
	plugins: [
		new Dotenv(),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({ filename: 'styles.[contenthash].css' }),
		new HtmlWebpackPlugin({
			filename: 'bucketlab.html',
			title: 'BucketLab',
			description: 'Personal portfolio and development laboratory for web development and IoT projects.',
			template: path.resolve(__dirname, 'src/templates/app_template.hbs'),
			minify: true, // minify is true by default
			chunks: ['bucketlab'],
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader, "css-loader"
				],
			},
      {
        test: /\.(js|.jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ "@babel/preset-env", "@babel/preset-react" ],
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
};