const chatSchema = require("../../models/chatSchema")
const convoSchema = require("../../models/convoSchema")

const sendMsg = async (req, res) => {

    try {
        const { reciverID, content, conversationID } = req.body
        console.log({ reciverID, content, conversationID })

        // if there is no reciver ID
        if (!reciverID) {
            return res.status(400).send({ error: "Something went wrong" })
        }

        // if there is no content
        if (!content) {
            return res.status(400).send({ error: "Something went wrong" })
        }

        // if there is no conversation ID
        if (!conversationID) {
            return res.status(400).send({ error: "Something went wrong" })
        }

        const existChat = await convoSchema.findOne({ _id: conversationID })

        if (!existChat) {
            return res.status(400).send({ error: "No Conversation Found" })
        }

        // create new massage
        const newMsg = new chatSchema({
            sender: req.user.id,
            reciver: reciverID,
            content,
            conversations: existChat._id
        })

        newMsg.save()

        // send last msg to conversation list schema
        await convoSchema.findByIdAndUpdate(existChat._id, { lastMsg: newMsg })

        global.io.emit("newMassage", newMsg)

        return res.status(200).send(newMsg)
    } catch (error) {
        return res.status(500).send({ error: "Server Error" })
    }
}

module.exports = sendMsg