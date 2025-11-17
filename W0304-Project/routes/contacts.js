const express = require("express");
const router = express.Router();
const cttControler = require("../controllers/contacts");

// Get
// #swagger.tags = ['contacts']
// #swagger.path = '/contacts'
router.get("/", cttControler.getAll);
router.get("/:id", cttControler.getById);

// Post
// #swagger.tags = ['contacts']
// #swagger.path = '/contacts'
router.post("/", cttControler.createCtt);

// Put
// #swagger.tags = ['contacts']
// #swagger.path = '/contacts/{id}'
router.put("/:id", cttControler.updadeCtt);

// Delete
// #swagger.tags = ['contacts']
// #swagger.path = '/contacts/{id}'
router.delete("/:id", cttControler.deleteCtt);

module.exports = router;    