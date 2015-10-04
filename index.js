'use strict';

var express = require('express');
var config = require('./config');
var mongoose = require('mongoose');
require('mongoose-type-email');

var passport = require('passport');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var User = require('./lib/models/User');

mongoose.connect('mongodb://localhost:27017/tickets');

const app = express();

app.use(cookieParser());
app.use(bodyParser());


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

app.use(session({ secret: 'secret' }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('Welcome to Tickets.by');
});

app.listen(config.port, () => {
  console.log('Node app is running on port', config.port);
});
