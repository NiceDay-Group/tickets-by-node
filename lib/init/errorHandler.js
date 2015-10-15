'use strict';

var httpStatus = require('http-status');
var _ = require('lodash');

function errorHandler(err, req, res, next) { //jshint ignore:line
  var statusCode =
    err.status ||
    err.statusCode ||
    err.code ||
    httpStatus.INTERNAL_SERVER_ERROR;

  var data = _.pick(err, 'message', 'errors');

  res.status(statusCode).json(data);
}

module.exports = errorHandler;
