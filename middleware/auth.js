const { AuthenticationError } = require('../errors')
const jwt = require('jsonwebtoken')

const authenticationMiddleware = async (req, res, next) => {
    const auth = req.headers.authorization
    if (!auth || !auth.startsWith('Bearer ')) {
        throw new AuthenticationError("no token is provided")
    }
    const token = auth.split(' ')[1]
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const { id, username } = decoded
        req.user = { id, username }
        next()
    } catch (error) {
        throw new AuthenticationError("route is expired")
    }
}

module.exports = authenticationMiddleware