'use strict';

var Article = require('../models/Article');

function getArticle(req, res) {
  Article.find({}, function(err,article) {
    if (err) {
      return res.send('Err:', err);
    } else {
      return res.json(article);
    }
  });

}

module.exports = {
  getArticle: getArticle,
};
