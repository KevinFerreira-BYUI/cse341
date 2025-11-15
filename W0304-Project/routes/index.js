const router = require("express").Router();
const indexCont = require("../controllers/index");
const swaggerRoute = require("./swagger");

router.use("/", swaggerRoute);

router.get("/", indexCont.showIndex);

module.exports = router;