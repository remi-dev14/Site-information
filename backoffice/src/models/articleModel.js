const db = require("../config/db");

const Article = {

  getAll: (callback) => {
    db.query("SELECT * FROM article ORDER BY date_publication DESC", callback);
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM article WHERE id = ?", [id], callback);
  },

  create: (article, callback) => {
    const sql = `
      INSERT INTO article (titre, contenu, image, date_publication)
      VALUES (?, ?, ?, ?)
    `;
    db.query(sql, [
      article.titre,
      article.contenu,
      article.image,
      article.date_publication
    ], callback);
  },

  update: (id, article, callback) => {
    const sql = `
      UPDATE article 
      SET titre=?, contenu=?, image=? 
      WHERE id=?
    `;
    db.query(sql, [
      article.titre,
      article.contenu,
      article.image,
      id
    ], callback);
  },

  delete: (id, callback) => {
    db.query("DELETE FROM article WHERE id = ?", [id], callback);
  }

};

module.exports = Article;