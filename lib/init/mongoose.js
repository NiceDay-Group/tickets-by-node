'use strict';

var mongoose = require('mongoose');
var mongooseTypes = require('mongoose-types');
mongooseTypes.loadTypes(mongoose, 'email');

module.exports = mongoose;
