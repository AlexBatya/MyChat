
class AddModels {

	public addUser(db: any, data: any){
		return new Promise(async (res: any) => {
			db.execute(`INSERT INTO user (name, password, email) VALUES (?, ?, ?);`, [data.name, data.password, data.email], (err: any) => {
				if(!err) res({
					status: 200, 
					send: "Пользователь добавлен"
				})
				else res({
					status: 404,
					send: err
				})

			})
		})
	}

	public getUser(db: any, data: any){
		return new Promise(async (res: any) => {
			db.execute(`SELECT * FROM user WHERE name = ?`, [data.name], (err: any, myData: any) => {
				if(!err) res({
					status: 200, 
					send: myData
				})
				else res({
					status: 404,
					send: err
				})

			})
		})
	}

}

export default new AddModels;
