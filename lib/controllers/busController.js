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

module.exports = {
  getBuses: getBuses,
  createBus: createBus,
};
