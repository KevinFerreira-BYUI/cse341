const express = require("express");
const router = express.Router();
const cttControler = require("../controllers/contacts");

// Get
router.get("/", cttControler.getAll);
router.get("/:id", cttControler.getById);

// Post
router.post("/", cttControler.createCtt);

module.exports = router;