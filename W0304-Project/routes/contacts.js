const express = require("express");
const router = express.Router();
const validator = require("../utils/validator");
const { validateCttSchema } = require("../utils/validator");
const { validadeParamsSchema } = require("../utils/validator");
const cttControler = require("../controllers/contacts");
const { isAuthenticated } = require("../middlewares/auth");

// Get
// #swagger.tags = ['contacts']
// #swagger.path = '/contacts'
router.get("/", cttControler.getAll);
router.get("/:id", validator.validateParamsId(validadeParamsSchema), cttControler.getById);

// Post
// #swagger.tags = ['contacts']
// #swagger.path = '/contacts'
router.post("/", isAuthenticated, validator.validate(validateCttSchema), cttControler.createCtt);

// Put
// #swagger.tags = ['contacts']
// #swagger.path = '/contacts/{id}'
router.put("/:id", isAuthenticated, validator.validateParamsId(validadeParamsSchema), validator.validate(validateCttSchema), cttControler.updadeCtt);

// Delete
// #swagger.tags = ['contacts']
// #swagger.path = '/contacts/{id}'
router.delete("/:id", isAuthenticated, validator.validateParamsId(validadeParamsSchema), cttControler.deleteCtt);

module.exports = router;    