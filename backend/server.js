const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('UNODOER Support API is live');
});

app.use('/api/chatbot', require('./routes/chatbot'));
app.use('/api/tickets', require('./routes/tickets'));
app.use('/api/feedback', require('./routes/feedback'));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
