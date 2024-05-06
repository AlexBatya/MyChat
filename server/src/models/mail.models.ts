class MailModels {

	public getUser(db: any, data: any){
		return new Promise(async (res: any) => {
			db.execute(`SELECT * FROM user WHERE email = ?`, [data.email], (err: any, myData: any) => {
				if(!err) res({
					status: 200, 
					send: myData[0]
				})
				else res({
					status: 404,
					send: err
				})

			})
		})
	}

}

export default new MailModels;
