const express = require("express");
const router = express.Router();
const cttControler = require("../controllers/contacts");

router.get("/", cttControler.getAll);

module.exports = router;