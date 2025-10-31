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

module.exports = {
    getAll,
    getSingle
};