const mongo = require("../data/db");
const { ObjectId } = require("mongodb");

const getAll = async (req, res) => {
   const result = await mongo.getDb().db().collection("Contacts").find();
   result.toArray().then((contacts) => {
    res.setHeader("Content-type", "application/json");
    res.status(200).json(contacts);
   });
};

const getSingle = async (req, res) => {
    const id = String(req.params.id)
    const contactId = new ObjectId(id);
    const result = await mongo.getDb().db().collection("Contacts").find({_id: contactId});
    result.toArray().then((contacts) => {
        res.setHeader("Content-type", "application/json");
        res.status(200).json(contacts[0]);
   });
};

const createContact = async (req, res) => {
    const id = String(req.params.id)
    const contactId = new ObjectId(id);
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        birthday: req.body.birthday,
        favColor: req.body.favColor,
    };

    const response = await mongo.getDb().db().collection("Contacts").replaceOne({_id, contactId}, contact);

    if(response.modifiedCount > 0){
        res.status(204).send();
    } else{
        res.status(500).json(response.error || "Some error occurred while updating.");
    }
};

module.exports = {
    getAll,
    getSingle
};