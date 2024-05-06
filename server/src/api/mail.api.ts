const nodemailer = require('nodemailer')
import path from 'path';
import fs from 'fs';


const fileReade: any = fs.readFileSync(path.join( 'config', 'localhost.json'))
const dataMail: any = JSON.parse(fileReade).mail;

let transporter = nodemailer.createTransport(dataMail)

const message = (from: any, to: any, header: any, text: any) => {
	transporter.sendMail({
		from: JSON.stringify(from),
		to: JSON.stringify(to),
		subject: header,
		html:	text 
	})
}
export default message;
