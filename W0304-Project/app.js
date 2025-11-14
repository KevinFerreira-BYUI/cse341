const express = require("express");
const app = express();
const port = process.env.PORT | 1910;
const index = require("./routes/index");

app.use("/", index);

app.listen(port);

