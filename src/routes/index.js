const express = require('express');
const router = express.Router();
const roleController = require('../controller/roleController'); // Adjust path as necessary

router.get('/roles', roleController.getRoles); // Example route for fetching roles

module.exports = router;
