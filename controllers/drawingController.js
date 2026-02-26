import { getAllDrawings } from '../services/s3getAllDrawings.js';
//import { postDrawing } from '../services/s3postDrawing.js';

// get all images
export const getDrawings = async (req, res, next) => {
    try {
        // service call to s3 bucket
        const data = await getAllDrawings(); // returns -> {# of drawings:# , drawings:[url, url, url]}
        res.status(200).json(data); // pass only drawings to where function was called
    } catch (e) {
        return res
            .status(500)
            .json({ msg: `No data found.`});
    }
};