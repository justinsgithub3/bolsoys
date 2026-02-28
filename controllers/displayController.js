
import path from 'path';
import { fileURLToPath } from 'url'; 
// Get the current filename and directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// get all images
export const getGalleryDisplay = async (req, res, next) => {
    try {
        res.sendFile(path.join(__dirname, '..', 'public', 'views', 'gallery.html'));

    } catch (e) {
        return res
            .status(500)
            .json({ msg: `No album page found...`});
    }
};
export const getUploadDisplay = async (req, res, next) => {
    try {
        res.sendFile(path.join(__dirname, '..', 'public', 'views', 'upload.html'));
    } catch (e) {
        return res
            .status(500)
            .json({ msg: `No upload page found...`});
    }
};
