import addModels from '../models/add.models'
import db from '../db'

class AddServices {
	public addUser(data: any){
		return new Promise(async (res: any) => {

			try{
				const getUser: any = await addModels.getUser(db,data);

				if(getUser.send.length == 0){

					const addUser: any = await addModels.addUser(db, data); 

					res({
						status: addUser.status,
						send: addUser.send
					})
				}
				else{
					res({
						status: 203,
						send: "Такой пользователь уже есть"
					})
				}
				
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

export default new AddServices;
