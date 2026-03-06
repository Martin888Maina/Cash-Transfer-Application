const express = require('express');
const routes = express.Router();
const accountController = require('../controllers/accountController');
const authenticateToken = require('../middleware/auth');

// all account routes require a valid token
routes.post('/accounts', authenticateToken, accountController.createAccount);
routes.get('/accounts', authenticateToken, accountController.getAllAccounts);
routes.get('/accounts/:uuid', authenticateToken, accountController.getAccountInfo);
routes.delete('/accounts/:uuid', authenticateToken, accountController.deleteAccount);
routes.get('/stats', authenticateToken, accountController.getStats);

module.exports = routes;
