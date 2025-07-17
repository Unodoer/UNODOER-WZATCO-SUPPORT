const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, issue } = req.body;
  if (!name || !email || !issue) {
    return res.status(400).json({ status: 'error', message: 'All fields are required' });
  }

  const ticketId = 'TKT-' + Math.floor(100000 + Math.random() * 900000);
  return res.json({ status: 'created', ticketId });
});

module.exports = router;
