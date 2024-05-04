const axios = require('axios');
const fs = require('fs');
const path = require('path');

const PORT =  JSON.parse(fs.readFileSync(path.join('config', 'localhost.json'))).server.PORT;
const token =  JSON.parse(fs.readFileSync(path.join('config', 'localhost.json'))).server.token;
const URL = "http://localhost" + ":" + PORT;

const axiosConfig = (url, data) => {
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

module.exports = function (url, data){
	return new Promise(async res => {

		const req = await axios(axiosConfig('/api' + url, data)); 
		res(req)
		
	})
}
