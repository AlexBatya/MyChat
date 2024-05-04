const axios = require('axios');

const URL = "http://localhost" + ":" + 5003;
const token = "1234567"

const axiosConfig = (url: string, data: any) => {
	return {
		method: "post",
		url: URL + url,
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token 
		},
		data: data
	}
};

function post(url: string, data: any){
	return new Promise(async res => {

		const req = await axios(axiosConfig('/api' + url, data)); 
		res(req)
		
	})
}

export default post;
