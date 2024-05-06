import deleteModels from '../models/delete.models'
import db from '../db'

class DeleteServices {
	public deleteUser(data: any){
		return new Promise(async (res: any) => {

			try{
				const deleteUser : any = await deleteModels.deleteUser(db,data);

				res({
					status: deleteUser.status,
					send: deleteUser.send
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

export default new DeleteServices;
