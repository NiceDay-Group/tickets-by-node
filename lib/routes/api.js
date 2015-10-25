'use strict';

var express = require('express');
var router = express.Router();
var passport = require('passport');

var auth = require('../controllers/authController');
var article = require('../controllers/articleController');
var user = require('../controllers/userController');
const ticket = require('../controllers/ticketController');
const bus = require('../controllers/busController');

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
router.get('/users', user.getUsers);
router.delete('/users', user.removeUser);

router.get('/users/:userId/tickets', ticket.getTickets);
router.post('/users/:userId/tickets', ticket.createTicket);
router.delete('/users/:userId/tickets/:id', ticket.removeTicket);

router.get('/buses', bus.getBuses);
router.post('/buses', bus.createBus);
router.delete('/buses/:id', bus.removeBus);

router.get('/articles', article.getArticles);
router.post('/articles', article.createArticle);
router.delete('/articles/:id', article.removeArticle);

module.exports = router;
