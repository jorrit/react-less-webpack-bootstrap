var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var exec = require('child_process').exec;
var colors = require('colors');

var webpackConfig = require('./webpack.config.js');

webpackConfig.output.path = '/';
webpackConfig.devServer.filename = '/' + webpackConfig.output.filename;
webpackConfig.devServer.publicPath = webpackConfig.output.publicPath;

var server = new WebpackDevServer(webpack(webpackConfig), webpackConfig.devServer);

var port = webpackConfig.devServer.port || 8080;
var host = webpackConfig.devServer.host || '0.0.0.0';

server.app.get('/assets/bundle.css', function(req, res)
{
	console.log('Compiling LESS styles...'.bold.blue);
	exec('lessc src/less/main.less', function callback(error, stdout, stderr)
	{
		if(stderr || error)
		{
			console.error(stderr || error);
		}
		else
		{
			console.log('LESS styles successfully compiled.'.bold.green);
		}

		res.setHeader('Content-type', 'text/css');
		res.send(stdout);
	});
});

server.listen(port, host, function(err)
{
	if(err) console.error(err);
	else console.log(('Listening ' + host + ':' + port).bold.yellow);
});