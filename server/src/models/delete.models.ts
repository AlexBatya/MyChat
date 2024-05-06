class DeleteModels {

	public deleteUser(db: any, data: any){
		return new Promise(async (res: any) => {
			db.execute(`DELETE FROM user WHERE name = ?`, [data.name], (err: any) => {
				if(!err) res({
					status: 200, 
					send: "Пользователь удалён"
				})
				else res({
					status: 404,
					send: err
				})

			})
		})
	}

}

export default new DeleteModels;
