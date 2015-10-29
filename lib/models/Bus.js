'use strict';

const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;

let busSchema = new Schema({
  route: Number,
});

busSchema.plugin(autoIncrement.plugin, {
  model: 'Bus',
  startAt: 100,
});

module.exports = mongoose.model('Bus', busSchema);
