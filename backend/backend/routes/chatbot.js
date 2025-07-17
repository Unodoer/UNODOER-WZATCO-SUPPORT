const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ reply: "Message is required." });

  const lower = message.toLowerCase();

  if (lower.includes("remote")) {
    return res.json({ reply: "If your remote isn't working, try replacing the batteries or resetting the projector." });
  } else if (lower.includes("return")) {
    return res.json({ reply: "Return is allowed within 7 days of delivery. Please contact support or fill the return form." });
  } else {
    return res.json({ reply: "Let me check further... (GPT response placeholder here)" });
  }
});

module.exports = router;
