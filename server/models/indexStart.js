// Importing the database configuration file into the indexStart.js file
const dbConfig = require('../config/dbConfig');
// This is the ORM LEVEL. An ORM allows developers to interact with relational database.
// Sequelize allows a developer to developer to create table content without having to manually create them in the database.
const { Sequelize, DataTypes } = require('sequelize');

// Establishing connection with the SQLite database
const sequelize = new Sequelize({
    dialect: dbConfig.dialect,
    storage: dbConfig.storage, 
});

//Authenticate is a method.
//Once connection is successful it will trigger the success message.
sequelize.authenticate()
    .then(() => {
        console.log('Database connection successful...');
    })
    .catch(err => {
        console.log('Error: ' + err);
    });

// Exporting models
// An object is created to hold Sequelize and sequelize instances.
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// register all models
db.accounts  = require('./accountModel.js')(sequelize, DataTypes);
db.transfers = require('./transferModel.js')(sequelize, DataTypes);
db.users     = require('./userModel.js')(sequelize, DataTypes);

// Establishing relationships between models
//Account can have many outgoing Transfers.
db.accounts.hasMany(db.transfers, { foreignKey: 'from_account_id', as: 'sentTransfers' });
//Account can have many incoming Transfers
db.accounts.hasMany(db.transfers, { foreignKey: 'to_account_id', as: 'receivedTransfers' });
//each Transfer is associated with exactly one Account
db.transfers.belongsTo(db.accounts, { foreignKey: 'from_account_id', as: 'sender' });
//each Transfer is associated with exactly one Account
db.transfers.belongsTo(db.accounts, { foreignKey: 'to_account_id', as: 'receiver' });


//Database synchronization level
//This means that tables will not be dropped and re-created if they already exist.
db.sequelize.sync({ force: false })
    .then(() => {
        console.log('Database sync completed...');
    })
    .catch(err => {
        console.error('Error syncing database:', err);
    });

module.exports = db;
