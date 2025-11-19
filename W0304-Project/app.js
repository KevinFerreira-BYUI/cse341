// App requirements
const express = require("express");
const app = express();
const corsConfig = require("./utils/corsConfig");
const bodyParser = require("body-parser");
const port = process.env.PORT | 1910;   

// Data Base connection
require("./models/db");

// Body parser
app.use(bodyParser.json());

// Cors Config
app.use(corsConfig);

// Routes requires
const index = require("./routes/index");
const cttRoute = require("./routes/contacts");
const messageRoute = require("./routes/messages");
const routeHandleErrorMidware = require("./routes/handleRouteError");


// App Routes
app.use("/", index);
app.use("/contacts", cttRoute);
app.use("/messages", messageRoute);


// Launch server
app.listen(port, console.log(`Running at localhost:${port}`));

// Route Error middleware
app.use(routeHandleErrorMidware);

// Global Error middleware
app.use((err, req, res, next) => {
    if (err.status) {
        return res.status(err.status).json({
            status: err.status,
            message: err.message
        });
    }

    res.status(500).json({
        status: 500,
        message: "Unexpected server error"
    });
});

