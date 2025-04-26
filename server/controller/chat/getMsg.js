const chatSchema = require("../../models/chatSchema")

const getMsg = async (req, res) => {

    try {
        const { conversationID } = req.params

        if (!conversationID) {
            return res.status(400).send({ error: "No massage foound" })
        }

        const getMassage = await chatSchema.find({ conversations: conversationID })

        if (!getMassage) {
            return res.status(400).send({ error: "No massage foound" })
        }

        res.status(200).send(getMassage)
    } catch (error) {
        return res.status(500).send({ error: "Server Error" })
    }
}

module.exports = getMsg