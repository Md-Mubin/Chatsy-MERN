const convoSchema = require("../../models/convoSchema")

const blockConvo = async (req, res) => {

    try {
        const { blockChatID, blockerID } = req.body

        if (!blockChatID) {
            return res.status(400).send({ error: "Try Again" })
        }

        if(!blockerID){
            return res.status(400).send({ error: "Try Again" })
        }

        const blockCheck = await convoSchema.findById(blockChatID)

        if (!blockCheck) {
            return res.status(400).send({ error: "Try Again" })
        }

        blockCheck.block = !blockCheck.block
        await blockCheck.save()

        return res.status(200).send({blockerID})
    } catch (error) {
        return res.status(500).send({ msg: "Server Error" })
    }
}

module.exports = blockConvo