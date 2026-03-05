const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const db = require('../models/indexStart');
const { registerSchema, loginSchema } = require('../validation/validation_Schema');

const User = db.users;

// signs a token that lasts 7 days
const signToken = (user) => {
    return jwt.sign(
        { id: user.id, email: user.email, name: user.name },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    );
};

module.exports = {
    register: async (req, res, next) => {
        try {
            const { error } = registerSchema.validate(req.body);
            if (error) {
                throw createError(400, error.details[0].message);
            }

            const { name, email, password } = req.body;

            // bail out early if email is already taken
            const existing = await User.findOne({ where: { email } });
            if (existing) {
                throw createError(409, 'An account with that email already exists.');
            }

            // 10 salt rounds is the minimum we accept
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({ name, email, password: hashedPassword });

            const token = signToken(user);

            res.status(201).json({
                success: true,
                data: {
                    token,
                    user: { id: user.id, name: user.name, email: user.email },
                },
            });
        } catch (error) {
            next(error);
        }
    },

    login: async (req, res, next) => {
        try {
            const { error } = loginSchema.validate(req.body);
            if (error) {
                throw createError(400, error.details[0].message);
            }

            const { email, password } = req.body;

            const user = await User.findOne({ where: { email } });
            if (!user) {
                // same message whether the email or password is wrong — don't leak which
                throw createError(401, 'Invalid email or password.');
            }

            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                throw createError(401, 'Invalid email or password.');
            }

            const token = signToken(user);

            res.status(200).json({
                success: true,
                data: {
                    token,
                    user: { id: user.id, name: user.name, email: user.email },
                },
            });
        } catch (error) {
            next(error);
        }
    },

    getProfile: async (req, res, next) => {
        try {
            // req.user is set by the auth middleware
            const user = await User.findByPk(req.user.id, {
                attributes: ['id', 'name', 'email'],
            });

            if (!user) {
                throw createError(404, 'User not found.');
            }

            res.status(200).json({ success: true, data: user });
        } catch (error) {
            next(error);
        }
    },
};
