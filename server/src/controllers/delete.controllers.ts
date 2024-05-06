import fs from 'fs';
import path from 'path';

import deleteServices from '../services/delete.services'

const fileReade: any = fs.readFileSync(path.join( 'config', 'localhost.json'))
const token : number = JSON.parse(fileReade).server.token;

class DeleteControllers{
	public async deleteUser(req: any, res: any){

		if(req.headers.authorization == token){

			const deleteUser: any = await deleteServices.deleteUser(req.body) 

			res
				.status(deleteUser.status)
				.json(deleteUser.send)
		}
		else res
			.status(403)
			.json("Не верный токен")

	}

}

export default new DeleteControllers;
