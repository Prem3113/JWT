const { BadRequest } = require('../errors')
const jwt = require('jsonwebtoken')
const login = async (req, res) => {
    //const date = new Date().getDate()
    //res.json(date)
    //try {
    const { username, password } = req.body
    if (!username || !password) {
        throw new BadRequest("enter valid credentials")
    }
    const id = new Date().getDate()
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' })
    //res.send("unauthozided access")
    res.status(200).json({ msg: "user created", token })
    //} catch (error) {
    //   res.status(500).json({ error: "something wrong!!..." })

    // }
}

const dashboard = async (req, res) => {
    // console.log(req.header)
    // const header = req.headers.authorization
    // if (!header || !header.startsWith('Bearer ')) {
    //    throw new CustomAPIError('No token provided', 401)
    // }
    //const decoded = header.split(' ')[1]
    //console.log(decoded)
    //const verifydata = jwt.verify(decoded, process.env.JWT_SECRET)
    //console.log(verifydata)
    const num = Math.floor(Math.random() * 100)
    res.status(200).json({ msg: `hello ${req.user.username}`, secret: `here is your authorized data ${num}` })
}

module.exports = { login, dashboard }