const message = require("../models/messages");

const getAllMessages = async (req, res) => {
    //#swagger.tags=['messages']
    try{
        const messages = await message.find().populate("contacts", "firstName lastName");
        res.json(messages);
    } catch(err){
        throw new Error(`get all messages error - ${err}`);
    }
};

const getMessageById = async (req, res) => {
    //#swagger.tags=['messages']
    try{
        const messageId = req.params.id

        const messageById = await message.findById(messageId).populate("contacts", "firstName lastName")
        res.json(messageById);

    } catch(err){
        throw new Error(`get message by Id error - ${err}`);
    }
};

const createMessage = async (req, res) => {
    //#swagger.tags=['messages']
    try{    
        const mes = {
            message: req.body.message,
            contacts: req.body.contacts
        }

        const createMessage = await (await message.create(mes)).populate("contacts", "firstName lastName");
        res.json(createMessage);

    } catch (err){
        throw new Error(`create message error - ${err}`);
    }
};

const updateMassage = async (req, res) => {
    //#swagger.tags=['messages']
    try{
        const mes = {message: req.body.message}
        const messageId = req.params.id;
        const update = await message.findByIdAndUpdate(messageId, mes).populate("contacts", "firstName lastName");
        res.json(update);
        
    } catch(err){
        throw new Error(`update message error - ${err}`);
    }
};

const deleteMessage = async (req, res) => {
    //#swagger.tags=['messages']
    try{
        const messageId = req.params.id

        const deleteMess = await message.findByIdAndDelete(messageId).populate("contacts", "firstName lastName");
        res.json(deleteMess);

    } catch(err){
        throw new Error(`delete message error - ${err}`);
    }
};

module.exports = {
    getAllMessages,
    createMessage,
    deleteMessage,
    getMessageById,
    updateMassage
};