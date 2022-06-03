const CustomAPIError = require("./custom_error")
const { StatusCodes } = require('http-status-codes')
class bad_request extends CustomAPIError {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

module.exports = bad_request