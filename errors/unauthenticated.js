const CustomAPIError = require('./custom_error')
const { StatusCodes } = require('http-status-codes')

class unauthenticatedError extends CustomAPIError {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = unauthenticatedError