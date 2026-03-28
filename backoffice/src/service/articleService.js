const Article = require("../models/articleModel");

const ArticleService = {

  getAllArticles: (callback) => {
    Article.getAll(callback);
  },

  getArticleById: (id, callback) => {
    Article.getById(id, callback);
  },

  createArticle: (data, callback) => {
    // ici tu peux ajouter des règles métier
    const article = {
      titre: data.titre,
      contenu: data.contenu,
      image: data.image,
      date_publication: new Date()
    };

    Article.create(article, callback);
  },

  updateArticle: (id, data, callback) => {
    Article.update(id, data, callback);
  },

  deleteArticle: (id, callback) => {
    Article.delete(id, callback);
  }

};

module.exports = ArticleService;