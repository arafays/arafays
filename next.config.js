const withPlugins = require('next-compose-plugins');
const withPreact = require('./next-preact');
const withSass = require('@zeit/next-sass');
module.exports = withPlugins(
	[
		withPreact,
		withSass({
			cssModules: true,
			cssLoaderOptions: {
				sourceMap: false,
				importLoaders: 1,
				localIdentName: '[local]___[hash:base64:5]'
			},
			sassLoaderOptions: {
				sourceMap: false,
				includePaths: ['styles']
			}
		})
	],
	{}
);
