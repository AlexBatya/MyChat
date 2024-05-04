const tsx = require('../loaders/tsx')
const scss = require('../loaders/scss')
const fonts = require('../loaders/fonts')
const img = require('../loaders/img')

module.exports = [
	img,
	tsx,
	scss,
	fonts
  // Другие загрузчики...
];
