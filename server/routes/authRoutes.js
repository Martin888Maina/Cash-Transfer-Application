const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authenticateToken = require('../middleware/auth');

router.post('/register', authController.register);
router.post('/login', authController.login);
// protected — only works with a valid token
router.get('/me', authenticateToken, authController.getProfile);

module.exports = router;
