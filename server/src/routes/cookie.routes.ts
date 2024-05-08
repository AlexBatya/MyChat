import express from 'express'
const router = express.Router();

import coocieControllers from '../controllers/cookie.controllers';

router 
	.route('/addCookie')
	.post(coocieControllers.addCookie)

router 
	.route('/getCookie')
	.post(coocieControllers.getCookie)

export default router;
