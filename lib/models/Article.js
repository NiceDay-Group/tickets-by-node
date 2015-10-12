'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  text: {
    type: String,
  },
  dateCreated: {
    type: Date,
  },
});

module.exports = mongoose.model('Article', articleSchema);
