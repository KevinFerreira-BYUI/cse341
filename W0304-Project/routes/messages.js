const router = require("express").Router();
const validator = require("../utils/validator");
const { validateMessageSchema } = require("../utils/validator");
const { validadeParamsSchema } = require("../utils/validator");
const messagesCont = require("../controllers/messages");
const { isAuthenticated } = require("../middlewares/auth");

// Get
// #swagger.tags = ['messages']
// #swagger.path = '/messages'
router.get("/", messagesCont.getAllMessages);
router.get("/:id", validator.validateParamsId(validadeParamsSchema), messagesCont.getMessageById);

// Post
// #swagger.tags = ['messages']
// #swagger.path = '/messages'
router.post("/", isAuthenticated, validator.validate(validateMessageSchema) , messagesCont.createMessage);

// Put
// #swagger.tags = ['messages']
// #swagger.path = '/messages/{id}'
router.put("/:id", isAuthenticated, validator.validateParamsId(validadeParamsSchema), validator.validate(validateMessageSchema) , messagesCont.updateMassage);

// Delete
// #swagger.tags = ['messages']
// #swagger.path = '/messages/{id}'
router.delete("/:id", isAuthenticated, validator.validateParamsId(validadeParamsSchema), messagesCont.deleteMessage);

module.exports = router;