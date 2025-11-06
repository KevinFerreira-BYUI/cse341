const express = require("express");
const app = express();
const mongo = require("./data/db");
const indexRoute = require("./routes/index");
const contactsRoute = require("./routes/contactsRoute");
const bodyParser = require("body-parser");
const swaggerRoutes = require("./routes/swaggerRoute");
const port = process.env.PORT | 4000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Z-Key"
    );

    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.use("/", indexRoute);
app.use("/contacts", contactsRoute);
app.use("/", swaggerRoutes);

mongo.iniDb((err) => {
    if(err){
        console.log(err);
    }
    else{
        app.listen(port, () => (console.log(`Hello World! This's running at ${port} \n and Database at localhost:4000/Contacts`)));
    }
});




