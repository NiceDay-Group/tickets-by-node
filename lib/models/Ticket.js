'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ticketSchema = new Schema({
  userId: String,
  busId: Number,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Ticket', ticketSchema);
