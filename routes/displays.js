import express from 'express';
import { getGalleryDisplay, getUploadDisplay, getHomeDisplay } from '../controllers/displayController.js';

const router = express.Router();

// get gallery display
router.get('/', getHomeDisplay);
router.get('/upload', getUploadDisplay);
router.get('/gallery', getGalleryDisplay);

export default router;