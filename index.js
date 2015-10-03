'use strict';

var express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Tickets.by');
});

app.listen(port, () => {
  console.log('Node app is running on port', port);
});
