const mongoose = require('mongoose');
const roleSchema = require('../schema/roleSchema'); // Importing the schema

// Export the 'Role' model with 'roleSchema' for the 'demoData' collection
module.exports = mongoose.model('Role', roleSchema, 'demoData');
