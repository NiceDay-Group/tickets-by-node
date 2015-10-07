'use strict';

var LocalStrategy = require('passport-local').Strategy;
var User = require('../../models/User');

module.exports = new LocalStrategy({
  usernameField: 'phoneNumber',
  passReqToCallback: true,
}, function(req, phoneNumber, password, done) {
  User.findOne({ phoneNumber: phoneNumber })
    .then(function(user) {
      if (!user || !user.verifyPassword(password)) {
        return done(null, false);
      }

      done(null, user);
    })
    .catch(done);
});
