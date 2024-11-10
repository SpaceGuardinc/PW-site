// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/api/rss', async (req, res) => {
  try {
    const response = await axios.get('http://rsshub.app/telegram/channel/PW_Nova');
    res.json(response.data);
  } catch (error) {
    console.error('Ошибка при запросе RSS:', error);
    res.status(500).send('Ошибка при получении данных');
  }
});

app.listen(port, () => {
  console.log(`Сервер работает на http://localhost:${port}`);
});
