const express = require("express");
const app = express();
const mongo = require("./data/db");
const indexRoute = require("./routes/index");
const contactsRoute = require("./routes/contactsRoute");
const port = process.env.PORT | 4000;

app.use("/", indexRoute);
app.use("/Contacts", contactsRoute);

mongo.iniDb((err) => {
    if(err){
        console.log(err);
    }
    else{
        app.listen(port, () => (console.log(`Hello World! This's running at ${port} \n and Database at localhost:4000/Contacts`)));
    }
});




