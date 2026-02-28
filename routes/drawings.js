import express from 'express';
import { getDrawings, createDrawing } from '../controllers/drawingController.js'
import multer from 'multer';

// Choose storage type
const storage = multer.memoryStorage(); // keeps drawing in memory as Buffer
const upload = multer({ storage });

const router = express.Router();

// GET all images
router.get('/', getDrawings);

// POST new image to s3 bucket
router.post('/', upload.single('form-drawing'), createDrawing);

export default router;
