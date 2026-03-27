const router = require("express").Router();
const {showIndex} = require("../controllers/index");
const swaggerRoute = require("./swagger");

router.use("/", swaggerRoute);

router.get("/", showIndex);

module.exports = router;