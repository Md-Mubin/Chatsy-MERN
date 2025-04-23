const express = require("express")
const coversation = require("../../controller/chat/conversation")
const authMiddleware = require("../../middleware/authMiddleware")
const convoList = require("../../controller/chat/convoList")
const sendMsg = require("../../controller/chat/sendMsg")
const chatRouter = express.Router()

chatRouter.post("/createConvo",authMiddleware, coversation)
chatRouter.post("/convoList",authMiddleware, convoList)

chatRouter.post("/send", authMiddleware, sendMsg)
// chatRouter.get("/send", )

module.exports = chatRouter