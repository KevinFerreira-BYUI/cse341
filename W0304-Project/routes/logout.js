const router = require("express").Router()

router.get("/", function(req, res, next) {
    //#swagger.ignore = true
    req.logOut(function(err){
        if(err){
            return next(err)
        }

        res.send(`
            <script>
                alert("You have logged out from your accont");
                window.location.href = "/";
            </script>
        `);
    });
});

module.exports = router;