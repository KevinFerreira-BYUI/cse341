const contact = require("../models/contacts");

// Get
const getAll = async (req, res) => {
    //#swagger.tags=['contacts']
    try{
        const contacts = await contact.find();
        res.json(contacts);

    } catch(err){
        throw new Error(`getAll error - ${err}`);
        
    }
};

const getById = async (req, res) => {
    //#swagger.tags=['contacts']
    try{
        const contactId = req.params.id;
        const contacts = await contact.findById(contactId);
        res.json(contacts);

    } catch(err){
        throw new Error(`getById error - ${err}`)
    };
};

// Post
const createCtt = async (req, res) => {
    //#swagger.tags=['contacts']
    try{
        const contactInfos = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            gender: req.body.gender,
            email: req.body.email,
            birthday: req.body.birthday,
            favColor: req.body.favColor
        };

        const createContact = await contact.create(contactInfos);
        res.json(createContact);
        
    } catch(err){
        throw new Error(`create contact error - ${err}`)
    };
};

// Put
const updadeCtt = async (req, res) => {
    //#swagger.tags=['contacts']
    try{
        const contactInfos = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            gender: req.body.gender,
            email: req.body.email,
            birthday: req.body.birthday,
            favColor: req.body.favColor
        };

        const contactId = req.params.id;

        const updateContact = await contact.updateOne(
            {_id: contactId},
            {$set: contactInfos}
        );
        res.json(updateContact);

    } catch(err){
        throw new Error(`update contact error - ${err}`);
    }
}

// Delete
const deleteCtt = async (req, res) => {
    //#swagger.tags=['contacts']
    try{
        const contactId = req.params.id
        const deleteContact = await contact.deleteOne(
            {_id: contactId}
        );
        res.json(deleteContact);

    } catch(err){
        throw new Error(`Delete contat error - ${err}`);
    }
};

module.exports = {
    getAll,
    getById,
    createCtt,
    updadeCtt,
    deleteCtt
};
