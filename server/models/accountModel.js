module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define('account', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // public-facing identifier — users see this instead of the integer id
        uuid: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
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
    }, {
        hooks: {
            // generate a uuid before each new account is inserted
            beforeCreate: (account) => {
                account.uuid = require('crypto').randomUUID();
            },
        },
    });

    return Account;
};
