import fs from 'fs';
import path from 'path';
import messege from '../api/mail.api'

import mailServices from '../services/mail.services'

const fileReade: any = fs.readFileSync(path.join( 'config', 'localhost.json'))
const token : number = JSON.parse(fileReade).server.token;

class MailControllers{
	public async getUser(req: any, res: any){

		if(req.headers.authorization == token){

			const getUser: any = await mailServices.getUser(req.body) 

			console.log(getUser.send);

			if(getUser.send){
				messege("alex28.12.12@mail.ru", req.body.email, "Востановление пороля", `Логин: ${getUser.send.name} \nПароль: ${getUser.send.password}`);
			}

			res
				.status(getUser.status)
				.json(getUser.send)
		}
		else res
			.status(403)
			.json("Не верный токен")

	}

}

export default new MailControllers;
