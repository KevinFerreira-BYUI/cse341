// App requirements
const express = require("express");
const app = express();
const corsConfig = require("./utils/corsConfig");
const bodyParser = require("body-parser");
const session = require("express-session");
const passportConfig = require("./config/passport");
const port = process.env.PORT | 1910;   

// Data Base connection
require("./models/db");

// Body parser
app.use(bodyParser.json());

// Setting session and passport
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true
}));

app.use(passportConfig.passportIni);
app.use(passportConfig.passportSes);

// Cors Config
app.use(corsConfig);

// GitHub Strategy
passportConfig.GitHubPass;

// Serialize and Deserialize User
passportConfig.passSerialize;
passportConfig.passDeserialize;


// Routes requires
const index = require("./routes/index");
const cttRoute = require("./routes/contacts");
const messageRoute = require("./routes/messages");
const errMiddleware = require("./middlewares/errosMiddle");
const loginRoute = require("./routes/login");
const logoutRoute = require("./routes/logout");
const authRoute = require("./routes/auth");


// App Routes
app.use("/", index);
app.use("/login", loginRoute);
app.use("/logout", logoutRoute);
app.use("/contacts", cttRoute);
app.use("/messages", messageRoute);

// Authentication Route
app.use("/", authRoute);

// Launch server
app.listen(port, console.log(`Running at localhost:${port}`));

// Route Error middleware
app.use(errMiddleware.routeErrMidlle)

// Global Error middleware
app.use(errMiddleware.globalErrMiddle);

