// App requirements
const express = require("express");
const app = express();
const port = process.env.PORT | 1910;

// Model
require("./models/db");

// Routes
const index = require("./routes/index");
const cttRoute = require("./routes/contacts");


// App Routes
app.use("/", index);
app.use("/contacts", cttRoute);


// Launch server
app.listen(port, console.log(`Running at localhost:${port}`));

