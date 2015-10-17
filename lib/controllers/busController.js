'use strict';

const Bus = require('../models/Bus');

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
  createBus: createBus,
};
