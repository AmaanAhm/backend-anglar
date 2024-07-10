const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const routes = require('./src/routes'); // Correct path to routes file
const dbConn = require('./src/core/db_conn'); // Ensure this points to the correct db_conn file
const cors = require('cors');
// Connect to MongoDB
dbConn.connect();

const app = express();
app.use(cors({
    origin: ['http://localhost:4200', 'http://localhost', 'http://65.2.98.244/'], // Allow requests from this origin
    methods: ['GET', 'POST'], // Allow these HTTP methods
    allowedHeaders: ['Content-Type'], // Allow these headers
  }));
  
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(upload.array());

// Routes
app.use('/api', routes); // Prefix all routes with /api


const port = 5001;  // Change to 5001 or any other available port
app.listen(port, () => {
  console.log(`Server  running on http://localhost:${port}`);
});
