require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const dbConnect = require("./config/dbConnect")
const router = require("./router")

app.use(express.json())
app.use(cors())
app.use(router)

dbConnect()

app.listen(8000, ()=>{
    console.log("Port Connected")
})