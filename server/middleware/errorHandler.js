// all errors get funnelled here via next(error) — keeps the controllers clean
const errorHandler = (err, req, res, next) => {
    const status  = err.status || 500;
    const message = err.message || 'Internal Server Error';

    res.status(status).json({
        error: {
            status,
            message,
        },
    });
};

module.exports = errorHandler;
