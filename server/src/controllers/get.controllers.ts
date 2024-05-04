import fs from 'fs';
import path from 'path';

import getServices from '../services/get.services'

const fileReade: any = fs.readFileSync(path.join( 'config', 'localhost.json'))
const token : number = JSON.parse(fileReade).server.token;

class GetControllers{
	public async getUser(req: any, res: any){

		if(req.headers.authorization == token){

			const getUser: any = await getServices.getUser(req.body) 

			res
				.status(getUser.status)
				.json(getUser.send)
		}
		else res
			.status(403)
			.json("Не верный токен")

	}

}

export default new GetControllers;
