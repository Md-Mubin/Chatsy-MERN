const convoSchema = require("../../models/convoSchema")

const deleteConvo = async (req, res) => {

    const { deletChatByUserId } = req.body

    if(!deletChatByUserId){
        return res.status(400).send({error : "Try Again"})
    }

    const deleteConvo = await convoSchema.findByIdAndDelete(deletChatByUserId)

    if(!deleteConvo){
        return res.status(400).send({error : "Try Again"})
    }

    res.status(200).send({msg : "Chat Delete Successful"})
}

module.exports = deleteConvo