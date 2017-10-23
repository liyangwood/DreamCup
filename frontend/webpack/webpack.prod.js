const merge = require('webpack-merge')
const common = require('./common')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const resolve = require('./util').resolve

const CleanWebpackPluginConfig = new CleanWebpackPlugin(
	[
		resolve('./dist')
	],
	{
		root: process.cwd(),
		verbose: true,
		dry: false
	}
);

const config = {
	output: {
		publicPath: '/',
		filename: '[name].[chunkhash:12].js',
		chunkFilename: '[name].[chunkhash:12].chunk.js',
	},
	plugins: [
		// This plugin will cause hashes to be based on the relative path of
		// the module, generating a four character string as the module id,
		// better for browser cache, browser will not need to fetch module again
		// if module name/content is unchanged after production build
		new webpack.HashedModuleIdsPlugin(),
		CleanWebpackPluginConfig,
	],
}

module.exports = merge(common, config)