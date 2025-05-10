const convoSchema = require("../../models/convoSchema")

const deletConvo = async (req, res) => {

    const { deletChatByUserId } = req.body

    if(!deletChatByUserId){
        return res.status(400).send("Try Again")
    }

    const deleteConvo = await convoSchema.findOne({deletChatByUserId})

    return res.status(200).send(deleteConvo)
}

module.exports = deletConvo