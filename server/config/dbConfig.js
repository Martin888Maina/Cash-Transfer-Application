const path = require('path');

// relative path so this works on any machine, not just the original dev setup
module.exports = {
    dialect: 'sqlite',
    storage: path.join(__dirname, '../database.db'),
};