const Role = require('../models/roleModel'); // Adjust path as necessary

const getRoles = async (req, res) => {
  try {
    const roles = await Role.find({});
    res.status(200).json({ roles });
  } catch (error) {
    console.error('Error fetching roles:', error.message);
    res.status(500).json({ message: 'Failed to fetch roles' });
  }
};

module.exports = { getRoles };
