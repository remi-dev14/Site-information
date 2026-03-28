const ArticleService = require("../services/articleService");

exports.getAll = (req, res) => {
  ArticleService.getAllArticles((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getById = (req, res) => {
  ArticleService.getArticleById(req.params.id, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.create = (req, res) => {
  ArticleService.createArticle(req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Article créé" });
  });
};

exports.update = (req, res) => {
  ArticleService.updateArticle(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Article modifié" });
  });
};

exports.delete = (req, res) => {
  ArticleService.deleteArticle(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Article supprimé" });
  });
};