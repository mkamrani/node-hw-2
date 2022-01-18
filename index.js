const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('bye World');
});

app.listen(process.env.PORT || 3001, () => {
  console.log('Server is running');
});

// test push 1.
