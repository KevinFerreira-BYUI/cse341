// App requirements
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT | 1910;   

// Model
require("./models/db");

// Body parser
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


// Routes
const index = require("./routes/index");
const cttRoute = require("./routes/contacts");
const swaggerRoute = require("./routes/swagger");

// App Routes
app.use("/", swaggerRoute);
app.use("/", index);
app.use("/contacts", cttRoute);


// Launch server
app.listen(port, console.log(`Running at localhost:${port}`));

