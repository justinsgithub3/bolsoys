
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';


// Get the current filename and directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Create the express application
const app = express();

app.use(express.static(path.join(__dirname, 'public')))

const port = process.env.PORT || 8080;

// Home page
app.get(['/home', '/'], (request, response) => {
  response.redirect('/views/home.html');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})