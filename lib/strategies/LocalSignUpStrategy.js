'use strict';

var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/User');

module.exports = new LocalStrategy({
  usernameField: 'phoneNumber',
  passReqToCallback: true,
}, function(req, phoneNumber, password, done) {
  Promise.resolve(User.create({
    name: req.body.name,
    phoneNumber: phoneNumber,
    password: User.generateHash(password),
    email: req.body.email,
  }))
    .then(function(user) {
      done(null, user);
    })
    .catch(function(err) {
      if (err.code === 11000) {
        done(null, false);
      }

      done(err);
    });
});
