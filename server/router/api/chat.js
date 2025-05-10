const express = require("express")
const authMiddleware = require("../../middleware/authMiddleware")
const convoList = require("../../controller/chat/convoList")
const sendMsg = require("../../controller/chat/sendMsg")
const getMsg = require("../../controller/chat/getMsg")
const createConvo = require("../../controller/chat/createConvo")
const chatRouter = express.Router()

chatRouter.post("/createConvo",authMiddleware, createConvo)
chatRouter.get("/convoList",authMiddleware, convoList)

chatRouter.post("/sendMsg", authMiddleware, sendMsg)
chatRouter.get("/getMsg/:conversationID", authMiddleware, getMsg )

module.exports = chatRouter