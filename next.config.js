const withPlugins = require('next-compose-plugins');
const withPreact = require('./next-preact');
const withSass = require('@zeit/next-sass');
module.exports = withPlugins([withPreact, withSass], {});
