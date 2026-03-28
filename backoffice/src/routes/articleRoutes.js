const express = require("express");
const router = express.Router();

const articleController = require("../controllers/articleController");
const authMiddleware = require("../middlewares/authMiddleware");

// public site
router.get("/", articleController.getAll);
router.get("/:id", articleController.getById);

// backoffice
router.post("/", authMiddleware, articleController.create);
router.put("/:id", authMiddleware, articleController.update);
router.delete("/:id", authMiddleware, articleController.delete);

module.exports = router;