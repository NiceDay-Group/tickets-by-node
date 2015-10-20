'use strict';

var express = require('express');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

var origin = process.env.NODE_ENV === 'production'
  ? 'http://tickets.niceday-group.com.s3-website.eu-central-1.amazonaws.com'
  : 'http://localhost:4200';
console.log(process.env.NODE_ENV);
app.use(cors({
  origin: origin,
  credentials: true,
}));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
}));

module.exports = app;
