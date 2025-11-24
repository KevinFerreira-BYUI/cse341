const createError = require("http-errors");

const routeErrMidlle = ((req, res, next) => {
    return next(createError(404, "Route not found. Try '/contacts' or '/messages'"));
});

const globalErrMiddle = (err, req, res, next) => {
    if (err.status) {
        return res.status(err.status).json({
            status: err.status,
            message: err.message
        });
    }

    res.status(500).json({
        status: 500,
        message: "Unexpected server error"
    });
}

module.exports = {routeErrMidlle, globalErrMiddle};  