const mongoose = require("mongoose");
const { contactsConnection } = require("./db");
const { ObjectId } = require("mongodb");

const contacsSchema = new mongoose.Schema({
    id: ObjectId,
    firstName: String,
    lastName: String,
    gender: String,
    email: String,
    birthday: Date,
    favColor: String
});


module.exports = contactsConnection.model("Contacts", contacsSchema);