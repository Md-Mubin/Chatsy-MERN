const express = require("express")
const login = require("../../controller/auth/login")
const register = require("../../controller/auth/register")
const verifyEmail = require("../../controller/auth/verifyEmail")
const forgetPass = require("../../controller/auth/forgetPass")
const resetPass = require("../../controller/auth/resetPass")
const update = require("../../controller/auth/update")
const upload = require("../../helpers/multer")
const authMiddleware = require("../../middleware/authMiddleware")
const authRouter = express.Router()

// ============= all routes
authRouter.post("/register", register)
authRouter.post("/emailVarified", verifyEmail)
authRouter.post("/forgetpass", forgetPass)
authRouter.post("/login", login)
authRouter.post("/resetPass/:randomString", resetPass)
authRouter.post("/update", authMiddleware, upload.single("avatar") , update)

module.exports = authRouter