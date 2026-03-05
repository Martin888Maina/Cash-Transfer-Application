const express = require('express');
const routes = express.Router();
const accountController = require('../controllers/accountController');
const authenticateToken = require('../middleware/auth');

// transfer routes require a valid token
routes.post('/transfers', authenticateToken, accountController.createTransfer);

module.exports = routes;
