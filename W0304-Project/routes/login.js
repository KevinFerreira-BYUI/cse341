const router = require("express").Router()
const passport = require("passport");


router.get("/", 
    //#swagger.ignore = true
    passport.authenticate("github")
);

module.exports = router;