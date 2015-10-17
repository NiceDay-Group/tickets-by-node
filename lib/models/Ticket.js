'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ticketSchema = new Schema({
  userId: String,
  busId: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Ticket', ticketSchema);
