const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
    let error = { ...err }

    error.message = err.message;
    // Log to console for developer
    console.log(err.stack.red);
    // error object has a stack on it which will give us the error and all the file

    // Mongoose bad ObjectId
    if(err.name === 'CastError'){
        const message = `Bootcamp not found with id of ${err.value }`;
        error = new ErrorResponse(message, 404);
    }
    console.log(err.name);

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    });
}

module.exports = errorHandler;