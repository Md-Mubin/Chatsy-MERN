const express = require("express")
const coversation = require("../../controller/chat/conversation")
const authMiddleware = require("../../middleware/authMiddleware")
const convoList = require("../../controller/chat/convoList")
const sendMsg = require("../../controller/chat/sendMsg")
const getMsg = require("../../controller/chat/getMsg")
const chatRouter = express.Router()

chatRouter.post("/createConvo",authMiddleware, coversation)
chatRouter.post("/convoList",authMiddleware, convoList)

chatRouter.post("/sendMsg", authMiddleware, sendMsg)
chatRouter.get("/getMsg/:conversationID", authMiddleware, getMsg )

module.exports = chatRouter