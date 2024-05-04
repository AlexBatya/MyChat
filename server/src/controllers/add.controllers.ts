import fs from 'fs';
import path from 'path';

import addServices from '../services/add.services'

const fileReade: any = fs.readFileSync(path.join( 'config', 'localhost.json'))
const token : number = JSON.parse(fileReade).server.token;

class AddControllers{
	public async addUser(req: any, res: any){

		if(req.headers.authorization == token){

			const addUser: any = await addServices.addUser(req.body) 

			res
				.status(addUser.status)
				.json(addUser.send)
		}
		else res
			.status(403)
			.json("Не верный токен")

	}

}

export default new AddControllers;
