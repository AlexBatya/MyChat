import getModels from '../models/get.models'
import db from '../db'

class GetServices {
	public getUser(data: any){
		return new Promise(async (res: any) => {

			try{

				const getUser: any = await getModels.getUser(db, data); 

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

export default new GetServices;
