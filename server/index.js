require("dotenv").config()

const http = require("http")
const { Server } = require("socket.io")
const express = require("express")
const app = express()
const cors = require("cors")
const dbConnect = require("./config/dbConnect")
const router = require("./router")

app.use(express.json())
app.use(cors())
const httpServer = http.createServer(app)
const io = new Server(httpServer,{
    cors : "*"
})

global.io = io

io.on("connection", (socket) =>{
    socket.join("join_room")
})

app.use(router)

dbConnect()

httpServer.listen(8000, () => {
    console.log("Port Connected")
})