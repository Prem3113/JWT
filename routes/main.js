const express = require('express')
const router = express.Router()
const { login, dashboard } = require('../controllers/main')
const authenticationMiddleware = require('../middleware/auth')

router.route('/login').post(login)
router.route('/dash').get(authenticationMiddleware, dashboard)

module.exports = router

