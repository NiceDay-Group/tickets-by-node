'use strict';

var Article = require('../models/Article');

function getArticles(req, res, next) {
  Article.find()
    .then((articles) => {
      res.json({
        articles: articles,
      });
    })
    .catch(next);
}

function createArticle(req, res, next) {
  Promise.resolve(Article.create(req.body.article))
    .then((article) => {
      res.json({
        article: article,
      });
    })
    .catch(next);
}

module.exports = {
  getArticles: getArticles,
  createArticle: createArticle,
};
