const crypto = require('crypto');

// generate a short 8-character alphanumeric ID — random enough for client-facing use
// without exposing the sequential integer primary key
const generateShortId = () => crypto.randomBytes(4).toString('hex');

module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define('account', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // public-facing identifier e.g. "a3f8c2d1"
        uuid: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            defaultValue: generateShortId,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        balance: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
            validate: {
                isFloat: true,
                min: 0,
            },
        },
    });

    return Account;
};
