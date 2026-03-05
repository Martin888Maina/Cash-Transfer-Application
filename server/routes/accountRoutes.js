const express = require('express');
const routes = express.Router();
const accountController = require('../controllers/accountController');
const authenticateToken = require('../middleware/auth');

// all account routes require a valid token
routes.post('/accounts', authenticateToken, accountController.createAccount);
routes.get('/accounts/:id', authenticateToken, accountController.getAccountInfo);

module.exports = routes;
