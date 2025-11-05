const mongo = require("../data/db");
const { ObjectId } = require("mongodb");
const util = require("../utils/utils");

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

        if(contacts.length <= 0){
            res.send(
                util.messageToUser("Contact not found! Try again!"),
                console.log("-- Empty --")
            );
        } else{
            res.setHeader("Content-type", "application/json");
            res.status(200).json(contacts[0]);
            console.log(contacts);
        };

   });
};

const createContact = async (req, res) => {
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        birthday: req.body.birthday,
        favColor: req.body.favColor,
    };

    const response = await mongo.getDb().db().collection("Contacts").insertOne(contact);

    if(response.acknowledged > 0){
        //res.status(204).send();
        res.send(
            util.messageToUser(`${contact.firstName} ${contact.lastName} Contact has been Created!`)
        );
    } else{
        res.status(500).json(response.error || "Some error occurred while creating a contact.");
    }
};

const updateContact = async (req, res) => {
   const id = String(req.params.id);
   const contactId = new ObjectId(id);
   const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        birthday: req.body.birthday,
        favColor: req.body.favColor,
    };

    const response = await mongo.getDb().db().collection("Contacts").replaceOne({_id: contactId}, contact);

    if(response.modifiedCount > 0){
        //res.status(204).send();
        res.send(
            util.messageToUser(`${contact.firstName} ${contact.lastName} Contact has been Updated!`)
        );
    } else{
        res.status(500).json(response.error || "Some error occurred while updating a contact.");
    }
};

const deleteContact = async (req, res) => {
    const id = String(req.params.id);
    const contactId = new ObjectId(id);

    const response = await mongo.getDb().db().collection("Contacts").deleteOne({_id: contactId});

    if(response.deletedCount > 0){
        //res.status(204).send()
        res.send(
            util.messageToUser(`${contactId} has been Deleted!`)
        );
    } else{
        res.status(500).send(
            util.messageToUser(`Some error occurred while deleting a contact. Try again!`)
        );
    }

};

module.exports = {
    getAll,
    getSingle,
    createContact,
    updateContact,
    deleteContact
};