const mongoose = require("./db")


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


module.exports = mongoose.model("Contacts", contacsSchema);