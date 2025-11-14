const mongoose = require("mongoose");
const { contactsConnection } = require("./db");


const contacsSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        gender: String,
        email: String,
        birthday: Date,
        favColor: String
    },
    {
        collection: "Contacts"
    }
);


module.exports = contactsConnection.model("Contacts", contacsSchema);