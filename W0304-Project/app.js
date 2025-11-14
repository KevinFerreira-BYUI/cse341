// App requirements
const express = require("express");
const app = express();
const port = process.env.PORT | 1910;

// Model
require("./models/db");

// Routes
const index = require("./routes/index");
const cttRoute = require("./routes/contacts");




app.use("/", index);
app.use("/contacts", cttRoute);


app.listen(port, console.log(`Running at localhost:${port}`));

