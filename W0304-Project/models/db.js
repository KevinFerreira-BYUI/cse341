const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config(); 

const dbUrl = process.env.DATA_BASE_URL;

mongoose.connect(dbUrl);

mongoose.connection.on("connected", () => {
    console.log("Db Connected")
});

mongoose.connection.on("error", (err) => {
    console.log(`Db error: ${err}`);
});

module.exports = mongoose;