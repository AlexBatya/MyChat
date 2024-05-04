import express from 'express'
const router = express.Router();

import getControllers from '../controllers/get.controllers';

router 
	.route('/getUser')
	.post(getControllers.getUser)

export default router;
