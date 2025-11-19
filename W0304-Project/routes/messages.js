const router = require("express").Router();
const validator = require("../utils/validator");
const { validateMessageSchema } = require("../utils/validator");
const { validadeParamsSchema } = require("../utils/validator");
const messagesCont = require("../controllers/messages");


// Get
// #swagger.tags = ['messages']
// #swagger.path = '/messages'
router.get("/", messagesCont.getAllMessages);
router.get("/:id", validator.validateParamsId(validadeParamsSchema), messagesCont.getMessageById);

// Post
// #swagger.tags = ['messages']
// #swagger.path = '/messages'
router.post("/", validator.validate(validateMessageSchema) , messagesCont.createMessage);

// Put
// #swagger.tags = ['messages']
// #swagger.path = '/messages/{id}'
router.put("/:id", validator.validateParamsId(validadeParamsSchema), validator.validate(validateMessageSchema) , messagesCont.updateMassage);

// Delete
// #swagger.tags = ['messages']
// #swagger.path = '/messages/{id}'
router.delete("/:id", validator.validateParamsId(validadeParamsSchema), messagesCont.deleteMessage);

module.exports = router;