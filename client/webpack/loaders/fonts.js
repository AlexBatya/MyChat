const path = require('path');
module.exports = {
	test: /\.(woff|woff2|eot|ttf|otf)$/,
	use: [
		{
			loader: 'file-loader',
			options: {
				name: '[name].[ext]',
				outputPath: 'fonts/'
			}
		}
	],
	include: path.resolve(__dirname, 'src/fonts')
}
