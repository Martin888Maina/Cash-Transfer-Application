//importing the joi validation library for validation
const Joi = require('joi');

//validation for the account creation process
const accountCreationSchema = Joi.object({
    //validate the name field to be a non-empty string
    name: Joi.string().required().messages({
        'string.empty': 'Name is required.',
    }),
    //validate the balance field to be a number and not negative
    balance: Joi.number().min(0).required().messages({
        'number.base': 'Balance must be a number.',
        'number.min': 'Balance cannot be negative.',
        'any.required': 'Balance is required.',
    }),
});

// Validation for money transfer (POST /transfers)
const transferSchema = Joi.object({
    //validate the from_account_id field to be a number and be required
    from_account_id: Joi.number().required().messages({
        'any.required': 'From account ID is required and must be a valid number',
        'number.base': 'From account ID must be a valid number'
    }),
    //validate the from_account_id field to be a number and be required
    to_account_id: Joi.number().required().messages({
        'any.required': 'To account ID is required and must be a valid number',
        'number.base': 'To account ID must be a valid number'
    }),
    //validate the amount field to be a number and be required
    amount: Joi.number().positive().required().messages({
        'any.required': 'Amount is required and must be a positive number',
        'number.base': 'Amount must be a valid number',
        'number.positive': 'Amount must be a positive number'
    })
});

//exporting the validation schemas to be used in the controller files
module.exports = {
    accountCreationSchema,
    transferSchema
};
