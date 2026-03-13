import express from 'express';
import { getGalleryDisplay, getHomeDisplay, getShopDisplay } from '../controllers/displayController.js';

const router = express.Router();

// get gallery display
router.get('/', getHomeDisplay);
router.get('/gallery', getGalleryDisplay);
router.get('/shop', getShopDisplay);

export default router;