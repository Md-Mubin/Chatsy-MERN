const express = require("express")
const apiRouter = require("./api")
const router = express.Router()

router.use(process.env.API_URL , apiRouter)

module.exports = router