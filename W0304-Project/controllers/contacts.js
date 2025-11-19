const contact = require("../models/contacts");
const createError = require("http-errors");

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

const getById = async (req, res, next) => {
    //#swagger.tags=['contacts']
    try{
        const contactId = req.params.id;
        const findContactById = await contact.findById(contactId);
    
        if (!findContactById){
            return next(createError(400, "There is not a contact with this Id. Try again"))        
        }
        
        res.json(findContactById);

    } catch(err){
        next(err);
    };
};

// Post
const createCtt = async (req, res, next) => {
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
        next(err);
    };
};

// Put
const updadeCtt = async (req, res, next) => {
    //#swagger.tags=['contacts']
    try{
        const contactId = req.params.id;
        const findCttId = await contact.findById(contactId);
        if(!findCttId){
            return next(createError(404, "Id not found. Try again."));
        }

        const contactInfos = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            gender: req.body.gender,
            email: req.body.email,
            birthday: req.body.birthday,
            favColor: req.body.favColor
        };

        const updateContact = await contact.updateOne(
            {_id: contactId},
            {$set: contactInfos}
        );

        res.json(
            {
                message: `Contact with Id - '${contactId}' has been uptated`,
                status: "Allright!"
            }
        );

    } catch(err){
        next(err);
    }
}

// Delete
const deleteCtt = async (req, res, next) => {
    //#swagger.tags=['contacts']
    try{
        const contactId = req.params.id
        const findCttId = await contact.findById(contactId);
        if (!findCttId){
            return next(createError(404, "ID not found or has already been deleted."));
        }

        const deleteContact = await contact.deleteOne({_id: contactId});
        res.json({
            message: `Contact with ID - '${contactId}' has been deleted.`,
            status: "Alright!"
        });

    } catch(err){
        next(err);
    }
};

module.exports = {
    getAll,
    getById,
    createCtt,
    updadeCtt,
    deleteCtt
};
