
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import logger from './middleware/logger.js';
import drawings from './routes/drawings.js';
import displays from './routes/displays.js';

// Get the current filename and directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Create the express application
const app = express();

// Logger middleware
app.use(logger);

// parse json data
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.use(express.static(path.join(__dirname, 'public')))

const port = process.env.PORT || 8080;

// middleware for routing to access the s3 bucket
// routes in this middlware regard creating, reading, updating, and deleting images.
app.use('/api/drawings', drawings);

// routes in this middlware regard general flow
app.use('/displays', displays);

// redirect this to make /displays the default
app.get(['/'], (request, response) => {
  response.redirect('/displays');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
