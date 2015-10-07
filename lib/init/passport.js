'use strict';

var passport = require('passport');
var localSignUpStrategy = require('./strategies/localSignUp');
var localSignInStrategy = require('./strategies/localSignIn');
var User = require('../models/User');

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

module.exports = passport;
