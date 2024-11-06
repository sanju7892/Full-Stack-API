
const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');

router.get('/data', verifyToken, async (req, res) => {
  // Fetch and return user-specific data
  res.json({ data: 'Protected data' });
});

module.exports = router;
