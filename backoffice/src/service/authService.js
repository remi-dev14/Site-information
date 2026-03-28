const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const AuthService = {

  login: (username, password) => {
    return new Promise((resolve, reject) => {

      if (!username || !password) {
        return reject({ status: 400, message: "Champs requis" });
      }

      User.findByUsername(username, async (err, results) => {
        if (err) {
          return reject({ status: 500, message: "Erreur serveur" });
        }

        if (results.length === 0) {
          return reject({ status: 401, message: "Utilisateur introuvable" });
        }

        const user = results[0];

        try {
          const isMatch = await bcrypt.compare(password, user.password);

          if (!isMatch) {
            return reject({ status: 401, message: "Mot de passe incorrect" });
          }

          const token = jwt.sign(
            { id: user.id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
          );

          resolve({
            message: "Connexion réussie",
            token
          });

        } catch (error) {
          reject({ status: 500, message: "Erreur serveur" });
        }
      });
    });
  }

};

module.exports = AuthService;