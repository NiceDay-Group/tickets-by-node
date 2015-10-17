'use strict';

const Ticket = require('../models/Ticket');

function createTicket(req, res, next) {
  Promise.resolve(Ticket.create({
    userId: req.params.userId,
    bus: req.body.ticket.busId,
  }))
    .then((ticket) => {
      res.json({
        ticket: ticket,
      });
    })
    .catch(next);
}

module.exports = {
  createTicket: createTicket,
};
