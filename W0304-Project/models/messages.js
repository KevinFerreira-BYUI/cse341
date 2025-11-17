const mongoose = require("./db");

const messageSchema =  new mongoose.Schema(
    {
        message: String,
        contacts: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Contacts"
        }
    },
    {
        collection: "Messages",
        versionKey: false
    }
);

module.exports = mongoose.model("Messages", messageSchema);