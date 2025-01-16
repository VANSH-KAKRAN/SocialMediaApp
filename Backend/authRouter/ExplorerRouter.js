import express from 'express';
import ExploreController from '../Controllers/ExploreController.js';

const router = express.Router();

router.get('/media', ExploreController)


export default router;