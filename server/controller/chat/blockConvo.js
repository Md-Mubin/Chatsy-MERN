const convoSchema = require("../../models/convoSchema")

const blockConvo = async (req, res) => {

    try {
        const { blockConvo } = req.body

        if (!blockConvo) {
            return res.status(400).send({ error: "Try Again" })
        }

        const blockCheck = await convoSchema.findById(blockConvo)

        if (!blockCheck) {
            return res.status(400).send({ error: "Try Again" })
        }

        blockCheck.block = !blockCheck.block
        await blockCheck.save()

        return res.status(200).send({ msg: blockCheck.block ? "Block Successful" : "Un-Block Successful" })
    } catch (error) {
        return res.status(500).send({ msg: "Server Error" })
    }
}

module.exports = blockConvo