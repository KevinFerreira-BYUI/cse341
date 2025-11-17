// App requirements
const express = require("express");
const app = express();
const corsConfig = require("./utils/corsConfig");
const bodyParser = require("body-parser");
const port = process.env.PORT | 1910;   

// Model
require("./models/db");

// Body parser
app.use(bodyParser.json());

// Cors Config
app.use(corsConfig);

// Routes
const index = require("./routes/index");
const cttRoute = require("./routes/contacts");
const messageRoute = require("./routes/messages");
const swaggerRoute = require("./routes/swagger");

// App Routes
app.use("/", swaggerRoute);
app.use("/", index);
app.use("/contacts", cttRoute);
app.use("/messages", messageRoute);


// Launch server
app.listen(port, console.log(`Running at localhost:${port}`));

