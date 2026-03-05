const jwt = require('jsonwebtoken');
const createError = require('http-errors');

// pulls the token from the Authorization header and verifies it
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // "Bearer <token>"

    if (!token) {
        return next(createError(401, 'Access denied. No token provided.'));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        // token is expired or has been tampered with
        return next(createError(401, 'Invalid or expired token.'));
    }
};

module.exports = authenticateToken;
