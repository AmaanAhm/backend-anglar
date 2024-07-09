const express = require('express');
const router = express.Router();
const roleController = require('../controller/roleController'); // Adjust path as necessary

// Define route for fetching roles
router.get('/', roleController.getRoles); // This assumes you're fetching roles at the root of '/api/roles'

module.exports = router;
