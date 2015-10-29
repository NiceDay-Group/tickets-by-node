'use strict';

var mongoose = require('mongoose');
var mongooseTypes = require('mongoose-types');
var autoIncrement = require('mongoose-auto-increment');

mongooseTypes.loadTypes(mongoose, 'email');

mongoose.autoIncrement = autoIncrement;

module.exports = mongoose;
