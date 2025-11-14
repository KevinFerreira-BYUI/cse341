const contact = require("../models/contacts");


const getAll = async (req, res) => {
    try{
        const contacts = await contact.find();
        res.json(contacts);

    } catch(err){
        throw new console.error(`getAll error: ${err}`);
        
    }
}; 

module.exports = {
    getAll
};