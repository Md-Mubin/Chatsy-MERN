const convoSchema = require("../../models/convoSchema")

const convoList = async (req, res) => {

    try {
        const conversation = await convoSchema.find({
            $or: [
                {
                    creator: req.user.id
                },
                {
                    participent: req.user.id
                }
            ]
        }).populate("creator", "name avatar email").populate("participent", "name avatar email").populate("lastMsg")

        if (!conversation) {
            return res.status(400).send({ error: "No Coversation Found" })
        }

        res.status(200).send(conversation)
    } catch (error) {
        return res.status(500).send({ error: "Server Error" })
    }
}

module.exports = convoList