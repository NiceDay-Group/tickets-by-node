'use strict';

var express = require('express');
var config = require('./config');
var mongoose = require('mongoose');
var mongooseTypes = require('mongoose-types');
mongooseTypes.loadTypes(mongoose, 'email');

var passport = require('passport');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var User = require('./lib/models/User');
var localSignUpStrategy = require('./lib/strategies/localSignUp');
var localSignInStrategy = require('./lib/strategies/localSignIn');

mongoose.connect(config.mongoUrl);

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use('local-signup', localSignUpStrategy);
passport.use('local-signin', localSignInStrategy);

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  next(new Error(401));
}

app.get('/', (req, res) => {
  res.send('Welcome to Tickets.by');
});

app.get('/protected', isLoggedIn, (req, res) => {
  res.json({message: 'Have access'});
});

app.post('/signup',
  passport.authenticate('local-signup'),
  function(req, res) {
    res.json({
      user: req.user,
    });
  }
);

app.get('/logout', function(req, res) {
  req.logout();
  res.send(200);
});

app.post('/signin',
  passport.authenticate('local-signin'),
  function(req, res) {
    res.json({
      user: req.user,
    });
  }
);

app.listen(config.port, () => {
  console.log('Node app is running on port', config.port);
});
