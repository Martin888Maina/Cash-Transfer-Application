//This file is responsible for the  creating the tables for the transfer data
const db = require('../models/indexStart');
// This is the ORM LEVEL. An ORM allows developers to interact with relational database.
// Sequelize allows a developer to developer to create table content without having to manually create them in the database.
module.exports = (sequelize, DataTypes) => {
        //we are giving the model variable the name transfer so we can use it the rest of the code
  const Transfer = sequelize.define('transfer', {
    //id column
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      //from sender
      from_account_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      // to receiver 
      to_account_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      //amount column
      amount: {
          type: DataTypes.FLOAT,
          allowNull: false,
          validate: {
              isFloat: true,
              // Prevent transfer amounts of zero or negative
              min: 0.01, 
          },
      },
      //timestamp column
      timestamp: {
          type: DataTypes.DATE,
          // Automatically sets the transfer date/time
          defaultValue: DataTypes.NOW, 
      },
  });

  return Transfer;
};