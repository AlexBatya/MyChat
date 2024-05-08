const post = require('./post.js');

(async () => {


	const send = await post('/user/addCookie', {test: 1})

	const get = await post('/user/getCookie')

	console.log(send.data)

	console.log(get.data)

})();
