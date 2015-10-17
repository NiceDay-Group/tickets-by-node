'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let busSchema = new Schema({
  route: Number,
});

module.exports = mongoose.model('Bus', busSchema);
