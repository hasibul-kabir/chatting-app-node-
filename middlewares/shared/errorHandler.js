const createError = require('http-errors');

//Not found handler
function notFoundHandler(req, res, next) {
    next(createError(404, "Page Not Found!"));
}

//default error handler
function errorHandler(err, req, res, next) {
    res.locals.error = {
        message: err.message
    }
    res.status(err.status || 500);
    if (res.locals.html) {
        res.render('error', {
            title: 'Error Page!'
        })
    } else {
        res.json(res.locals.error)
    }

}
module.exports = {
    notFoundHandler,
    errorHandler
}