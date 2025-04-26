const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) => {

    try {
        const token = req.header("authorization")
        if (token) {
            jwt.verify(token, process.env.SECRET_ACC_TOKEN, function (err, decoded) {
                if (err) {
                    return res.status(400).send({ error: "Bad Request" })
                }
                if (decoded.data) {
                    req.user = decoded.data
                    next()
                }
            })
        } else {
            return res.status(400).send({ error: "Bad Request" })
        }
    } catch (error) {
        return res.status(500).send({ error: "Server Error" })
    }
}

module.exports = authMiddleware