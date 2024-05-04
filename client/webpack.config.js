const path = require('path');
const { merge } = require('webpack-merge');
const loaders = require('./webpack/config/loaders');
const paths = require('./webpack/config/paths');

const plugins = require('./webpack/config/plugins')

module.exports = {
  entry: path.resolve(paths.src, 'index.tsx'),
  output: {
		path: paths.dist,
		filename: 'bundle.js',
  },
  module: {
  	rules: loaders,
  },

	plugins,

  resolve: {
  	extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
		static: {
				directory: path.resolve(__dirname, 'public')
		},
		hot: true,
		port: 4000,
		open: true
	}
};
