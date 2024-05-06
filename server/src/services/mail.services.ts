import mailModels from '../models/mail.models'
import db from '../db'

class MailServices {
	public getUser(data: any){
		return new Promise(async (res: any) => {

			try{

				const getUser: any = await mailModels.getUser(db, data); 

				res({
					status: getUser.status,
					send: getUser.send
				})

			}
			catch{
				res({
					status: 404,
					send: "Ошибка сервиса"
				})
			}
			
		})
	}
}

export default new MailServices;
