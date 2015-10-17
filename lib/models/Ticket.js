'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ticketSchema = new Schema({
  busId: String,
  dateCreated: Date,
});

module.exports = mongoose.model('Ticket', ticketSchema);
