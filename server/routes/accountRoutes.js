//importing express module for routing
const express = require('express');
//importing the accountRoutes.js file
const routes = express.Router();
//importing the accountController.js file
const accountController = require('../controllers/accountController');

// Create a new account
routes.post('/accounts', accountController.createAccount);

// Retrieve an account's information
routes.get('/accounts/:id', accountController.getAccountInfo);

module.exports = routes;
