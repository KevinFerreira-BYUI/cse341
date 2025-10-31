const router = require("express").Router();

router.get("/", (req, res) => {
    res.send(
       `<div>
            <p>Hello World!</p>
            <a href="/Contacts">Contacts Here</a>
        </div>`
    )
});

module.exports = router;