'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  description: String,
  text: String,
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Article', articleSchema);
