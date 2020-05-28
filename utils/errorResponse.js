// anything thats not middleware that's kind of a help or utility we are going to put in here

class ErrorResponse extends Error {
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

module.exports = ErrorResponse;