import fs from 'fs';
import path from 'path';

const fileReade: any = fs.readFileSync(path.join( 'config', 'localhost.json'))
const token : number = JSON.parse(fileReade).server.token;

class CoocieControllers{
	public async addCookie(req: any, res: any){

		if(req.headers.authorization == token){

			res
				.cookie('userData', req.body, { maxAge: 180000, httpOnly: true})

			res
				.status(200)
				.json(req.body)
		}
		else res
			.status(403)
			.json("Не верный токен")

	}

	public async getCookie(req: any, res: any){

		if(req.headers.authorization == token){
			console.log(JSON.stringify(req.cookies))
			res
				.status(200)
				.send(`${req.cookies.userData}`)
		}
		else res
			.status(403)
			.json("Не верный токен")

	}

}

export default new CoocieControllers;
