'use strict';

var express = require('express');
var router = express.Router();
var passport = require('passport');

var auth = require('../controllers/authController');
var article = require('../controllers/articleController');
var user = require('../controllers/userController');

router.get('/', (req, res) => {
  res.send('Welcome to Tickets.by');
});

router.get('/protected', auth.ensureAuthenticated, (req, res) => {
  res.json({message: 'Have access'});
});

router.post('/signin', passport.authenticate('local-signin'), auth.getUser);
router.get('/logout', auth.logout);
router.get('/isLogged', auth.ensureAuthenticated, auth.getUser);

router.post('/users', user.createUser);

router.get('/articles', article.getArticles);
router.post('/articles', article.createArticle);

module.exports = router;
