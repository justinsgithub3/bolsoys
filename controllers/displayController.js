
import path from 'path';
import { fileURLToPath } from 'url'; 
// Get the current filename and directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// get all images
export const getGalleryDisplay = async (req, res, next) => {
    try {
        res.render(path.join(__dirname, '..', 'public', 'views', 'gallery.ejs'));

    } catch (e) {
        return res
            .status(500)
            .json({ msg: `No gallery page found...`});
    }
};

export const getShopDisplay = async (req, res, next) => {
    try {
        res.render(path.join(__dirname, '..', 'public', 'views', 'shop.ejs'));

    } catch (e) {
        return res
            .status(500)
            .json({ msg: `No shop page found...`});
    }
};

export const getHomeDisplay = async (req, res, next) => {
    try {
        res.render(path.join(__dirname, '..', 'public', 'views', 'home.ejs'));
    } catch (e) {
        return res
            .status(500)
            .json({ msg: `No home page found...`});
    }
};