const express = require("express");
const app = express();
const port = 8080;
const professionalRoute = require("./routes/professionalRoute");

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
})
.use("/professional", professionalRoute);


app.listen(port);

console.log(`server running at ${port}`);

