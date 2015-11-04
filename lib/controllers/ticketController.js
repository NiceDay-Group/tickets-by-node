'use strict';

const Ticket = require('../models/Ticket');

function getTickets(req, res, next) {
  if(req.user._id.toString() === req.query.userId) {
    Ticket.find({
      userId: req.query.userId,
    })
      .then((tickets) => {
        res.json({
          tickets: tickets,
        });
      })
      .catch(next);
  }
}

function createTicket(req, res, next) {
  if(req.user._id.toString() === req.body.ticket.userId) {
    Promise.resolve(Ticket.create({
      userId: req.body.ticket.userId,
      busId: req.body.ticket.busId,
    }))
      .then((ticket) => {
        res.json({
          ticket: ticket,
        });
      })
      .catch(next);
  }
}

function removeTicket(req, res, next) {
  if(req.user._id.toString() === req.body.ticket.userId) {
    Ticket.remove({
      _id: req.params.id,
      userId: req.params.userId,
    })
      .then(() => {
        res.sendStatus(200);
      })
      .catch(next);
  }
}

module.exports = {
  getTickets: getTickets,
  createTicket: createTicket,
  removeTicket: removeTicket,
};
