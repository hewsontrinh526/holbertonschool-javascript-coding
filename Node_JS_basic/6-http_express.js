const express = require('express');
const port = 1245;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, function () {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
