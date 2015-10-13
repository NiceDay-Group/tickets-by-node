'use strict';

function getUser(req, res) {
  res.json({
    user: req.user
  });
}

function logout(req, res) {
  req.logout();
  res.send(200);
}

function isLogged(req, res, next) {
  if (req.isAuthenticated()) {
    return res.json({
      user: req.user
    });
  }

  next(new Error(401));
}

module.exports = {
  getUser: getUser,
  logout: logout,
  isLogged: isLogged
};
