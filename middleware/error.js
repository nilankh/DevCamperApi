// /ye hm q create kia h pta h q ki sirf next(err) krne se json data show ni krega, html show krega toa json ho toa uske liua... Custom error handler we want to return json data
const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
    let error = { ...err }

    error.message = err.message;
    // Log to console for developer
    // console.log(err.stack.red);
    console.log(err);
    // error object has a stack on it which will give us the error and all the file

    // Mongoose bad ObjectId
    if(err.name === 'CastError'){
        const message = `Resource not found with id of ${err.value }`;
        error = new ErrorResponse(message, 404);
    }

    // Mongoose duplicate key
    if(err.code === 11000){
        const message = 'Duplicae Filed value Entered';
        error = new ErrorResponse(message, 400);
    }

    console.log(err.name);

    // mongoose validation error
    if(err.name === 'ValidationError'){
        const message = Object.values(err.errors).map(val => val.message);
        error = new ErrorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    });
}

module.exports = errorHandler;