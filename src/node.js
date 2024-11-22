import express from 'express';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;


const __dirname = path.dirname(fileURLToPath(import.meta.url));


const distDir = path.resolve(__dirname, '../dist');

app.use(express.static(distDir));

app.get('/api/rss', async (req, res) => {
  try {
    const response = await axios.get('http://rsshub.app/telegram/channel/PW_Nova');
    res.json(response.data);
  } catch (error) {
    console.error('Ошибка при запросе RSS:', error);
    res.status(500).send('Ошибка при получении данных');
  }
});


app.get('*', (req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(port, () => {
  console.log(`Сервер работает на http://localhost:${port}`);
});
