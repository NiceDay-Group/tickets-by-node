'use strict';

const Ticket = require('../models/Ticket');

function getTickets(req, res, next) {
  Ticket.find({
    userId: req.params.userId,
  })
    .then((tickets) => {
      res.json({
        tickets: tickets,
      });
    })
    .catch(next);
}

function createTicket(req, res, next) {
  Promise.resolve(Ticket.create({
    userId: req.params.userId,
    busId: req.body.ticket.busId,
  }))
    .then((ticket) => {
      res.json({
        ticket: ticket,
      });
    })
    .catch(next);
}

module.exports = {
  getTickets: getTickets,
  createTicket: createTicket,
};
