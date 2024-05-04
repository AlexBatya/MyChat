import express from 'express'
const router = express.Router();

import addControllers from '../controllers/add.controllers';

router 
	.route('/addUser')
	.post(addControllers.addUser)

export default router;
