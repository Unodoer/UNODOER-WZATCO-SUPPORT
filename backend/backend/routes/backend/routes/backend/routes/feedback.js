const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const { ticketId, rating, comment } = req.body;
  if (!ticketId || !rating) {
    return res.status(400).json({ status: 'error', message: 'Missing ticket ID or rating' });
  }

  return res.json({ status: 'success', message: 'Feedback recorded. Thank you!' });
});

module.exports = router;
