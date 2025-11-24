const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/github/callback", passport.authenticate("github",
    //#swagger.ignore = true
    {
        failureRedirect: "/api-docs"
    }),
    (req, res) => {
        req.session.user = req.user;
        res.send(`
            <script>
                alert("Logged in as ${req.session.user.displayName}");
                window.location.href = "/";
            </script>
        `);
    }
);

module.exports = router;