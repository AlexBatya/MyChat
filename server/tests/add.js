const post = require('./post.js');

(async () => {

	const get = await post('/user/getUser', {
		name: "Alex",
		password: "324pass",
	})
	
	console.log(get.data)

})();
