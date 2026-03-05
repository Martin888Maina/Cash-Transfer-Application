//This file is responsible for the  creating the tables for the account data
const db = require('../models/indexStart');
// This is the ORM LEVEL. An ORM allows developers to interact with relational database.
// Sequelize allows a developer to developer to create table content without having to manually create them in the database.
module.exports = (sequelize, DataTypes) => {
    //we are giving the model variable the name account so we can use it the rest of the code
    const Account = sequelize.define('account', {
        //id column
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        //name column
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        //balance column
        balance: {
            type: DataTypes.FLOAT,
            allowNull: false,
            //sets default value to zero
            defaultValue: 0,
            validate: {
                //endure it is a fload datatype
                isFloat: true,
                // Prevent negative balances
                min: 0, 
            },
        },
    });

    return Account;
};