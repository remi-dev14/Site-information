const db = require("../config/db");

const User = {

  create: (user, callback) => {
    const sql = "INSERT INTO user (username, password) VALUES (?, ?)";
    db.query(sql, [user.username, user.password], callback);
  },

  findByUsername: (username, callback) => {
    const sql = "SELECT * FROM user WHERE username = ?";
    db.query(sql, [username], callback);
  }

};

module.exports = User;