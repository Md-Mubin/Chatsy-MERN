require("dotenv").config()

const http = require("http")
const { Server } = require("socket.io")
const express = require("express")
const app = express()
const cors = require("cors")
const dbConnect = require("./config/dbConnect")
const router = require("./router")

app.use(express.json())
app.use(cors({
    origin : process.env.FRONTEND_MAIN_URL,
    credentials : true
}))
const httpServer = http.createServer(app)

// socket io cors
const io = new Server(httpServer, {
    cors: {
        origin : process.env.FRONTEND_MAIN_URL,
        credentials : true
    }
})

global.io = io

const allActiveUsers = new Map()

io.on("connection", (socket) => {
    socket.on("join_room", (convoID) => {
        socket.join(convoID)
    })

    socket.on("join_user", (joinID) => {
        allActiveUsers.set(socket.id, joinID)
        io.emit("active_users", Array.from(allActiveUsers.values()))
    })

    socket.on("disconnect", () => {
        allActiveUsers.delete(socket.id)
        setTimeout(() => {
            io.emit("active_users", Array.from(allActiveUsers.values()))
        }, 4000);
    })
})

app.use(router)

dbConnect()

httpServer.listen(process.env.PORT, () => {
    console.log("Port Connected")
})