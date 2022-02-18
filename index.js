const express = require('express');
const app = express();

app.get('/x', (req, res) => {
  res.send('xyz!');
});

app.get('/', (req, res) => {
  res.send('hello...');
});

app.get('/ping', (req, res) => {
  res.send('pong!');
});

app.listen(process.env.PORT || 3001, () => {
  console.log('Server is running');
});

// test push 1
