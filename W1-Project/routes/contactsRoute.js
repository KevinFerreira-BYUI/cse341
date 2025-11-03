const router = require("express").Router();
const contactsController = require("../controllers/contactsController");

router.get("/", contactsController.getAll);
router.get("/:id", contactsController.getSingle);
// router.post("/", contactsController);
// router.put("/:id", contactsController);
// router.delete("/id:", contactsController);

module.exports = router;