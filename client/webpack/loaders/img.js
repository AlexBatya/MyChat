const path = require('path');

module.exports = {
	test: /\.(png|jpg|gif)$/,
	use: [
		{
			loader: 'url-loader',
			options: {
				limit: 8192,
			},
		},
	],
	include: path.resolve(__dirname, 'public/img')
}
