const express = require("express")
const apiRouter = require("./api")
const router = express.Router()

router.use(process.env.API_URL, apiRouter)

router.use((req, res) => {

    return res.status(400).send({ error: "No Page Found" })
})

module.exports = router