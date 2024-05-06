const post = require('./post.js');

(async () => {

	const get = await post('/user/sendMail', {
		email: "aeex28.12.12@mail.ru",
	})
	
	console.log(get.data)

})();
