const express = require('express');
const cors    = require('cors');
const helmet  = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

// helmet sets sensible security headers with one line
app.use(helmet());

// read allowed origin from env so we don't hardcode it
const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  methods: ['GET', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// tighter rate limit on auth endpoints to slow down brute force attempts
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: { error: { status: 429, message: 'Too many requests. Please try again later.' } },
});

// slightly more generous limit for general API usage
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: { status: 429, message: 'Too many requests. Please try again later.' } },
});

const authRoute     = require('./routes/authRoutes');
const accountRoute  = require('./routes/accountRoutes');
const transferRoute = require('./routes/transferRoutes');

app.use('/Auth', authLimiter, authRoute);
app.use('/Account', apiLimiter, accountRoute);
app.use('/Transfer', apiLimiter, transferRoute);

// 404 handler for any route that doesn't match above
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// pull in the centralized error handler
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
