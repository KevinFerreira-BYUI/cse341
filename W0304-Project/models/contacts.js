const mongoose = require("mongoose");
const { contactsConnection } = require("./db");


const contacsSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        gender: String,
        email: String,
        birthday: String,
        favColor: String
    },
    {
        collection: "Contacts",
        versionKey: false
    }
);


module.exports = contactsConnection.model("Contacts", contacsSchema);