//importing express module for routing
const express = require('express');
//importing the accountRoutes.js file
const routes = express.Router();
//importing the accountController.js file
const accountController = require('../controllers/accountController');


// Handle money transfer
routes.post('/transfers', accountController.createTransfer);

module.exports = routes;
