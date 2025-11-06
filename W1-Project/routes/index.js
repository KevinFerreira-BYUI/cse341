const router = require("express").Router();
const swagger = require("./swaggerRoute");

router.use("/", swagger);

router.get("/", (req, res) => {
    //#swagger.tags=['Hellor World']
    res.send(
       `<div>
            <p>Hello World!</p>
            <a href="/Contacts">Contacts Here</a>
        </div>`
    )
});

module.exports = router;