const dbConfig = require('../config/dbConfig');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: dbConfig.dialect,
    storage: dbConfig.storage,
});

sequelize.authenticate()
    .then(() => {
        console.log('Database connection successful...');
    })
    .catch(err => {
        console.log('Error: ' + err);
    });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// register all models
db.accounts  = require('./accountModel.js')(sequelize, DataTypes);
db.transfers = require('./transferModel.js')(sequelize, DataTypes);
db.users     = require('./userModel.js')(sequelize, DataTypes);

// Establishing relationships between models
// Outgoing transfers use from_account_id as the foreign key.
db.accounts.hasMany(db.transfers, { foreignKey: 'from_account_id', as: 'sentTransfers' });
// Incoming transfers use to_account_id as the foreign key.
db.accounts.hasMany(db.transfers, { foreignKey: 'to_account_id', as: 'receivedTransfers' });
db.transfers.belongsTo(db.accounts, { foreignKey: 'from_account_id', as: 'sender' });
db.transfers.belongsTo(db.accounts, { foreignKey: 'to_account_id', as: 'receiver' });

// Sync without dropping existing data; force: true would wipe the database on every start.
db.sequelize.sync({ force: false })
    .then(() => {
        console.log('Database sync completed...');
    })
    .catch(err => {
        console.error('Error syncing database:', err);
    });

module.exports = db;
