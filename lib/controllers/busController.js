'use strict';

const Bus = require('../models/Bus');

function getBuses(req, res, next) {
  Bus.find()
    .then((buses) => {
      res.json({
        buses: buses,
      });
    })
    .catch(next);
}

function createBus(req, res, next) {
  Promise.resolve(Bus.create({
    route: req.body.bus.route,
  }))
    .then((bus) => {
      res.json({
        bus: bus,
      });
    })
    .catch(next);
}

function removeBus(req, res, next) {
  Bus.remove({
    _id: req.params.id,
  })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(next);
}

module.exports = {
  getBuses: getBuses,
  createBus: createBus,
  removeBus: removeBus,
};
