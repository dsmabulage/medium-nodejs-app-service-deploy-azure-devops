const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const envName = process.env.ENV_NAME || 'DefaultApp';
  res.send(`Welcome to ${envName}`);
});

app.get('/users', (req, res) => {
  const users = require('./user-data.json');
  res.send(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
