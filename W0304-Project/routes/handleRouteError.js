const createError = require("http-errors");

const routeHandleErrorMidware = ((req, res, next) => {
    return next(createError(404, "Route not found. Try '/contacts' or '/messages'"));
});

module.exports = routeHandleErrorMidware;