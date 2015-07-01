var SOURCE_FOLDER	= __dirname + '/src/';
var DIST_FOLDER		= __dirname + '/dist/';
var BUNDLE_NAME		= 'bundle.js';

module.exports = {
	entry: SOURCE_FOLDER + '/index.js',
	output:
	{
		path: DIST_FOLDER + '/assets/',
		filename: BUNDLE_NAME,
		publicPath: '/assets/'
	},
	module:
	{
		loaders:
		[
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
		]
	},
	devServer:
	{
		port: 8080,
		host: '0.0.0.0',
		lazy: true,
		contentBase: SOURCE_FOLDER,
		stats: { colors: true }
	}
};