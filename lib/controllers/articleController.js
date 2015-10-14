'use strict';

var Article = require('../models/Article');

function getArticle(req, res) {
  Article.find({}, function(err,article) {
    if (err) {
      return res.send('Err:', err);
    }

    return res.json(article);
  });
}

function createArticle(req, res) {
  Article.create({article:req.body}, function(err, article) {
    if (err) {
      res.send('Err', err);
    }

    return res.json(article);
  });
}

module.exports = {
  getArticle: getArticle,
  createArticle: createArticle,
};
