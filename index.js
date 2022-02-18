const express = require('express');
const app = express();

app.get('/x', (req, res) => {
  res.send('xyz!');
});

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(process.env.PORT || 3001, () => {
  console.log('Server is running');
});

// test push 1
