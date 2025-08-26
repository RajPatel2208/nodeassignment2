// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors()); 

app.get('/quote', async (req, res) => {
  try {
    const response = await axios.get('https://zenquotes.io/api/random');
    const quote = response.data[0];
    res.json({ text: quote.q, author: quote.a });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch quote' });
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
