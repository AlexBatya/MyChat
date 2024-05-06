import express from 'express'
const router = express.Router();

import mailControllers from '../controllers/mail.controllers';

router 
	.route('/sendMail')
	.post(mailControllers.getUser)

export default router;
