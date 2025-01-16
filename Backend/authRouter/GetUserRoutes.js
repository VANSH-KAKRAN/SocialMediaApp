import express from 'express';
import ProtectRoute from '../MiddleWare/ProtectRoute.js';
import { userRoutes } from '../Controllers/userController.js';

const router = express.Router()

router.get('/',ProtectRoute, userRoutes)

export default router;