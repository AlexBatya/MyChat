const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('../config/paths');

console.log(path.resolve("../", paths.public, 'index.html'))

module.exports = new HtmlWebpackPlugin({
	template: path.resolve(paths.public, 'index.html'),
		filename: 'index.html',
	})

