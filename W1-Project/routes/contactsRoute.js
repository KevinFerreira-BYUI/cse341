const router = require("express").Router();
const contactsController = require("../controllers/contactsController");

router.get("/", contactsController.getAll);
router.get("/:id", contactsController.getSingle);

module.exports = router;