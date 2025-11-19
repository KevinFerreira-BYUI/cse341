const message = require("../models/messages");
const contact = require("../models/contacts");
const createError = require("http-errors");

// Get
const getAllMessages = async (req, res, next) => {
    //#swagger.tags=['messages']
    try{
        const msg = await message.find().populate("contacts", "firstName lastName");
        

        if (!msg){
            throw createError(404, "Messages not found");
        }

        res.json(msg);

    } catch(err){
        next(err);
    }
};

const getMessageById = async (req, res, next) => {
    //#swagger.tags=['messages']
    const msgId = req.params.id
    try{
        const msgById = await message.findById(msgId).populate("contacts", "firstName lastName");

        if(!msgById){
            return next(createError(404, "The message by this id was not found."));
        }

        res.json(msgById);

    } catch(err){
        next(err);
    }
};

// Post
const createMessage = async (req, res, next) => {
    //#swagger.tags=['messages']
    const mes = {
        message: req.body.message,
        contacts: req.body.contacts
    }

    const contactId = await contact.findById(mes.contacts);

    if (!contactId){
        return next(createError(404, "There is not a contact associated to this Id."));
    }
    
    try{    
        const createMessage = await (await message.create(mes)).populate("contacts", "firstName lastName");
        res.json(createMessage);

    } catch(err){
        next(err);
    }
};

// Put
const updateMassage = async (req, res, next) => {
    //#swagger.tags=['messages']
    const mes = {
        message: req.body.message,
        contacts: req.body.contacts
    }

    const messageId = req.params.id
    const findMessageId = await message.findById(messageId);
    
    if(!findMessageId){
        return next(createError(404, "Message Id not found."));
    }
    
    const contactId = await contact.findById(mes.contacts);
    if(!contactId){
        return next(createError(404, "Contact not found"))
    }

    try{
        const update = await message.findByIdAndUpdate(messageId, mes).populate("contacts", "firstName lastName");

        res.json(update);
        
    } catch(err){
        next(err);
    }
};

// Delete
const deleteMessage = async (req, res, next) => {
    //#swagger.tags=['messages']
    const messageId = req.params.id
    const findMessageId = await message.findById(messageId);
    
    if (!findMessageId){
        return next(createError(400, "Message not find or does not exist. Try another Id"))
    }

    try{
        const deleteMess = await message.findByIdAndDelete(messageId).populate("contacts", "firstName lastName");
        res.json(deleteMess);

    } catch(err){
        next(err);
    }
};

module.exports = {
    getAllMessages,
    createMessage,
    deleteMessage,
    getMessageById,
    updateMassage
};