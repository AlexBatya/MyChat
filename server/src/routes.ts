import addUserRoutes from './routes/add.routes'
import getUserRoutes from './routes/get.routes'
import deleteUserRoutes from './routes/delete.routes'
import mailUserRoutes from './routes/mail.routes'

import express from 'express';
const router = express.Router();

router.use('/user', getUserRoutes)
router.use('/user', addUserRoutes)
router.use('/user', deleteUserRoutes)
router.use('/user', mailUserRoutes)

export default router;
