const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./common')
const resolve = require('./util').resolve
const CleanWebpackPlugin = require('clean-webpack-plugin')

const CleanWebpackPluginConfig = new CleanWebpackPlugin(
	[
		resolve('./dev')
	],
	{
		root: process.cwd(),
		verbose: true,
		dry: false
	}
);


const webpackConfig = {
	output: {
		filename: '[name].js',
		chunkFilename: '[name].chunk.js',
		publicPath : '/',
		path: resolve('./dev'),
	},
	// A SourceMap without column-mappings ignoring loaded Source Maps.
	devtool: 'cheap-module-source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					'eslint-loader',
				],
				exclude: /node_modules/
			}
		]
	},
	plugins : [
		// new webpack.HotModuleReplacementPlugin(),
		// This plugin will cause the relative path of the module to be displayed
		// when HMR is enabled
		new webpack.NamedModulesPlugin(),
		CleanWebpackPluginConfig
	]
}

module.exports = merge(common, webpackConfig)