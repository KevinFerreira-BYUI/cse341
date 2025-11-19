const Joi = require("@hapi/joi");

// Helper
const validate = (schema) => {
    return (req, res, next) => {
        const {error, value} = schema.validate(req.body);

        if (error){
            return res.status(400).json({
                message: error.details[0].message
            });  
        }

        req.body = value;
        next();
    };
};

const validateParamsId = (schema) => {
    return (req, res, next) => {
        const {error, value} = schema.validate(req.params);

        if (error){
            return res.status(400).json({
                message: error.details[0].message
            });
        }

        req.params = value
        next();
    };
};


// Validator schemas
const validateCttSchema = Joi.object({
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string().min(2).required(),
    gender: Joi.string().min(4).required(),
    email: Joi.string().email().required(),
    birthday: Joi.string().optional(),
    favColor: Joi.string().optional()
});

const validateMessageSchema = Joi.object({
    message: Joi.string().min(2).required(),
    contacts: Joi.string().length(24).required()
});

const validadeParamsSchema = Joi.object({
    id: Joi.string().length(24).required()
});

module.exports = {
    validate,
    validateParamsId,
    validateCttSchema,
    validateMessageSchema,
    validadeParamsSchema
}