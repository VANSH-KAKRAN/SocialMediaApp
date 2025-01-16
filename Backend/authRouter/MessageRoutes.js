import express from 'express';
import { getMessages, Sendmessage } from '../Controllers/SendMessage.js';
import ProtectRoute from '../MiddleWare/ProtectRoute.js';

const router =  express.Router();

router.post('/send/:id',ProtectRoute, Sendmessage);
router.get('/:id',ProtectRoute, getMessages);

export default router;