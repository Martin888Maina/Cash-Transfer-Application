// importing he indexStart file into the accountController.js file
const db = require('../models/indexStart');
// importing the global error handling package into the controller file
const createError = require('http-errors');
// importing the validation code for the backend validation of user inputs.
const { accountCreationSchema, transferSchema } = require('../validation/validation_Schema'); // Import the validation schemas
// importing the account model file into the accountController.js file
const Account = db.accounts;
// importing the transfer model file into the accountController.js file
const Transfer = db.transfers;

module.exports = {
    // Create a new account
    createAccount: async (req, res, next) => {
        try {
            // Validate input using the accountCreationSchema in the validation_Schema.js file
            const { error } = accountCreationSchema.validate(req.body);
            if (error) {
                //throws error message is validation fails
                throw createError(400, error.details[0].message);
            }
    
            // Create account with name and initial balance as user inputs
            const account = await Account.create({
                name: req.body.name,
                balance: req.body.balance,
            });
    
            // Send response with newly created account details
            res.status(201).send(account);
        } catch (error) {
            next(error);
        }
    },

    
    // Retrieve account information
    getAccountInfo: async (req, res, next) => {
        try {
            // retrieves the users account using their id
            const account = await Account.findOne({
                where: { id: req.params.id }
            });

            // if the account is not found then throws error message
            if (!account) {
                throw createError(404, "Account not found");
            }

            // Send response with account details
            res.status(200).send(account);
        } catch (error) {
            next(error); // Handle any errors
        }
    },
    

    // Handles money transfer from one user account to the other
    createTransfer: async (req, res, next) => {
        // Validate input using the transferSchema in the validation_Schema.js file
        const { error } = transferSchema.validate(req.body);
        //throws error when validation fails
        if (error) {
            return res.status(400).send({ error: error.details[0].message }); 
        }

        //requires the account id of sender and receiver as form inputs
        const { from_account_id, to_account_id, amount } = req.body;
        //initialize a transaction object to ensure all database operations are handled atomically
        const transaction = await db.sequelize.transaction();

        try {
            // Validate the existence of the accounts
            const fromAccount = await Account.findByPk(from_account_id);
            const toAccount = await Account.findByPk(to_account_id);

            //if either the sender or receiver account are not found in the database then throws an error.
            if (!fromAccount || !toAccount) {
                throw createError(404, 'One or both accounts not found');
            }

            // Ensure source account has sufficient funds
            if (fromAccount.balance < amount) {
                throw createError(400, 'Insufficient funds');
            }

            // Perform the transaction
            // deducts the senders account and add it to the receiver account
            await fromAccount.update(
                //deducts from the sender balance
                { balance: fromAccount.balance - amount },
                //pass the transaction context
                { transaction }
            );
            await toAccount.update(
                //add amout to receiver balance
                { balance: toAccount.balance + amount },
                //pass the transaction context
                { transaction }
            );

            // Record the transfer in the transfers table
            const transfer = await Transfer.create(
                { from_account_id, to_account_id, amount },
                { transaction }
            );

            // Commit the transaction to make changes permanent
            await transaction.commit();

            // Send response with transfer details
            res.status(200).send(transfer);
        } catch (error) {
            // Rollback the transaction if there's an error
            await transaction.rollback();
            next(error); // Handle any errors
        }
    }
};

