const router = require("express").Router();
const messagesCont = require("../controllers/messages");

// Get
// #swagger.tags = ['messages']
// #swagger.path = '/messages'
router.get("/", messagesCont.getAllMessages);
router.get("/:id", messagesCont.getMessageById);

// Post
// #swagger.tags = ['messages']
// #swagger.path = '/messages'
router.post("/", messagesCont.createMessage);

// Put
// #swagger.tags = ['messages']
// #swagger.path = '/messages/{id}'
router.put("/:id", messagesCont.updateMassage);

// Delete
// #swagger.tags = ['messages']
// #swagger.path = '/messages/{id}'
router.delete("/:id", messagesCont.deleteMessage);

module.exports = router;