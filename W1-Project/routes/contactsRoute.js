const router = require("express").Router();
const contactsController = require("../controllers/contactsController");

// #swagger.tags = ['Contacts']
// #swagger.path = '/Contacts'
router.get("/", contactsController.getAll); 

// #swagger.tags = ['Contacts']
// #swagger.path = '/Contacts/{id}'
router.get("/:id", contactsController.getSingle); 

// #swagger.tags = ['Contacts']
// #swagger.path = '/Contacts'
router.post("/", contactsController.createContact); 

// #swagger.tags = ['Contacts']
// #swagger.path = '/Contacts/{id}'
router.put("/:id", contactsController.updateContact); 

// #swagger.tags = ['Contacts']
// #swagger.path = '/Contacts/{id}'
router.delete("/:id", contactsController.deleteContact); 

module.exports = router;