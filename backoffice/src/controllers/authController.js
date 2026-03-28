const AuthService = require("../services/authService");

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await AuthService.login(username, password);
    res.json(result);

  } catch (error) {
    res.status(error.status || 500).json({
      message: error.message || "Erreur serveur"
    });
  }
};