'use strict';

var httpErrors = require('http-errors');

function getUser(req, res) {
  res.json({
    user: req.user,
  });
}

function logout(req, res) {
  req.logout();
  res.send(200);
}

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  throw new httpErrors.Forbidden('User not authenticated');
}

module.exports = {
  getUser: getUser,
  logout: logout,
  ensureAuthenticated: ensureAuthenticated,
};
