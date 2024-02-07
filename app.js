require('@babel/register');
require('dotenv').config();

const express = require('express');
const serverConfig = require('./config/serverConfig');

const app = express();

const indexRouter = require('./routes/index.routes');

serverConfig(app);

app.use('/', indexRouter);

app.get('/version', (req, res) => {
  // process это глобальный объект окружения у которого есть метод version
  res.json({ version: process.version });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is working on ${PORT}`);
});
