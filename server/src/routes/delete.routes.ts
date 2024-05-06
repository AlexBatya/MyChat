import express from 'express'
const router = express.Router();

import deleteControllers from '../controllers/delete.controllers';

router 
	.route('/deleteUser')
	.post(deleteControllers.deleteUser)

export default router;
