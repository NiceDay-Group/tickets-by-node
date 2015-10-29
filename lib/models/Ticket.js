'use strict';

const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;

let ticketSchema = new Schema({
  userId: String,
  busId: Number,
  busTicketId: Number,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

ticketSchema.plugin(autoIncrement.plugin, {
  model: 'Ticket',
  field: 'busTicketId',
  startAt: 100,
});

module.exports = mongoose.model('Ticket', ticketSchema);
