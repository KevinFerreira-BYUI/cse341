const contact = require("../models/contacts");



const getAll = async (req, res) => {
    try{
        const contacts = await contact.find();
        res.json(contacts);

    } catch(err){
        throw new console.error(`getAll error: ${err}`);
        
    }
};

const getById = async (req, res) => {
    try{
        const contactId = req.params.id;
        const contacts = await contact.findById(contactId);
        res.json(contacts);

    } catch(err){
        throw new console.error(`getById error: ${err}`)
    };
};

const createCtt = async (req, res) => {
    try{
        const contactInfos = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            gender: req.body.gender,
            email: req.body.email,
            birthday: req.body.birthday,
            favColor: req.body.favColor
        };

        const createContact = await contact.insertOne(contactInfos);
        res.json(createContact);
        
    } catch(err){
        console.error(err);
    };
};

module.exports = {
    getAll,
    getById,
    createCtt
};