const router = require("express").Router();
const indexCont = require("../controllers/index");

router.get("/", indexCont.showIndex);

module.exports = router;