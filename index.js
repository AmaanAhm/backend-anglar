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
const port = process.env.API_PORT || 5000;
app.use(cors({
    origin: 'http://localhost:4200', // Allow requests from this origin
    methods: ['GET', 'POST'], // Allow these HTTP methods
    allowedHeaders: ['Content-Type'], // Allow these headers
  }));
  
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(upload.array());

// Routes
app.use('/api', routes); // Prefix all routes with /api

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
