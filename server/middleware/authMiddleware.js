const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) => {

    const token = req.header("authorization")
    if (token) {
        jwt.verify(token, process.env.SECRET_ACC_TOKEN, function (err, decoded) {
            if (err) {
               return res.status(400).send({msg : "Bad Request"})
            }
            if (decoded.data) {
                req.user = decoded.data
                next()
            }
        })
    }else{
        return res.status(400).send({msg : "Bad Request"})
    }
}

module.exports = authMiddleware