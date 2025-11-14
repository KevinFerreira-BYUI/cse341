const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config(); 

const dbUrl = process.env.DATA_BASE_URL;


const contactsConnection = mongoose.createConnection(`${dbUrl}/Contacts`);
const messagesConnection = mongoose.createConnection(`${dbUrl}/messages`);

contactsConnection.on("connected", () => {
    console.log("Contacts Db connected")
});

contactsConnection.on("error", (err) => {
    console.log(`Error at Contacts Db: ${err}`);
});


messagesConnection.on("connected", () => {
    console.log("Messages Db connected");
});

messagesConnection.on("error", (err) => {
    console.log(`Error at Messages Db: ${err}`);
});

module.exports = {
    contactsConnection,
    messagesConnection
};