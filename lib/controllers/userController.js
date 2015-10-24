'use strict';

const User = require('../models/User');
const httpErrors = require('http-errors');

function getUsers(req, res, next) {
    User.find()
      .then((users)=> {
        res.json({
            users: users,
        });
      })
      .catch(next);
}

function createUser(req, res, next) {
  let user = req.body.user;

  Promise.resolve(User.create({
    name: user.name,
    phoneNumber: user.phoneNumber,
    password: User.generateHash(user.password),
    email: user.email,
  }))
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      if (err.code === 11000) {
        return next(new httpErrors.Conflict('User with specified ' +
          'phone number already exists.'));
      }

      next(err);
    });
}

module.exports = {
  createUser: createUser,
  getUsers: getUsers,
};
