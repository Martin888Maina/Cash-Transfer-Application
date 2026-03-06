//importing the joi validation library for validation
const Joi = require('joi');

// schema for new user registration
const registerSchema = Joi.object({
    name: Joi.string().trim().required().messages({
        'string.empty': 'Name is required.',
        'any.required': 'Name is required.',
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'Please provide a valid email address.',
        'string.empty': 'Email is required.',
        'any.required': 'Email is required.',
    }),
    // minimum 6 characters enforced here and in the controller
    password: Joi.string().min(6).required().messages({
        'string.min': 'Password must be at least 6 characters.',
        'string.empty': 'Password is required.',
        'any.required': 'Password is required.',
    }),
});

// schema for login
const loginSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.email': 'Please provide a valid email address.',
        'any.required': 'Email is required.',
    }),
    password: Joi.string().required().messages({
        'any.required': 'Password is required.',
    }),
});

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

// Validation for money transfer — accepts 8-character hex short IDs
const transferSchema = Joi.object({
    from_account_uuid: Joi.string().length(8).required().messages({
        'any.required': 'From account ID is required',
        'string.length': 'From account ID must be a valid account ID',
    }),
    to_account_uuid: Joi.string().length(8).required().messages({
        'any.required': 'To account ID is required',
        'string.length': 'To account ID must be a valid account ID',
    }),
    amount: Joi.number().positive().required().messages({
        'any.required': 'Amount is required and must be a positive number',
        'number.base': 'Amount must be a valid number',
        'number.positive': 'Amount must be a positive number',
    }),
});

//exporting the validation schemas to be used in the controller files
module.exports = {
    registerSchema,
    loginSchema,
    accountCreationSchema,
    transferSchema
};
