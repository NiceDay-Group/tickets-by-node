'use strict';

var express = require('express');
var router = express.Router();
var passport = require('passport');

var auth = require('../controllers/authController');
var article = require('../controllers/articleController');

router.get('/', (req, res) => {
  res.send('Welcome to Tickets.by');
});

router.get('/protected', auth.isLogged, (req, res) => {
  res.json({message: 'Have access'});
});

router.post('/signin', passport.authenticate('local-signin'), auth.getUser);
router.post('/signup', passport.authenticate('local-signup'), auth.getUser);
router.get('/logout', auth.logout);
router.get('/isLogged', auth.isLogged);

router.get('/articles', article.getArticle);

module.exports = router;
