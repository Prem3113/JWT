const { CustomAPIError } = require('../errors')
const { StatusCodes } = require('http-status-codes')
const ErrorMiddleWare = async (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err })
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("something went wrong try again later")
}

module.exports = ErrorMiddleWare