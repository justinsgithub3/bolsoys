import express from 'express';
import { getGalleryDisplay, getUploadDisplay } from '../controllers/displayController.js';

const router = express.Router();

// get gallery display
router.get('/', getGalleryDisplay);
router.get('/upload', getUploadDisplay);

export default router;