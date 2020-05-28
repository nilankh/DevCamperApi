const errorHandler = (err, req, res, next) => {
    // Log to console for developer
    console.log(err.stack.red);
    // error object has a stack on it which will give us the error and all the file

    res.status(500).json({
        success: false,
        error: err.message
    });
}

module.exports = errorHandler;