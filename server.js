
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import logger from './middleware/logger.js';
import drawings from './routes/drawings.js';


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

// Home page
app.get(['/home', '/'], (request, response) => {
  response.redirect('/views/home.html');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
