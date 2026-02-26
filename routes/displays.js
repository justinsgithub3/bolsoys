import express from 'express';
import { getGalleryDisplay, getCameraDisplay } from '../controllers/displayController.js';

const router = express.Router();

// get gallery display
router.get('/', getGalleryDisplay);