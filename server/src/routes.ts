import addUserRoutes from './routes/add.routes'
import getUserRoutes from './routes/get.routes'

import express from 'express';
const router = express.Router();

router.use('/user', getUserRoutes)

export default router;
