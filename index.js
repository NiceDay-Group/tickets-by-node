'use strict';

var express = require('express');
var config = require('./config');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Tickets.by');
});

app.listen(config.port, () => {
  console.log('Node app is running on port', config.port);
});
