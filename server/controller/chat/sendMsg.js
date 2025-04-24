const chatSchema = require("../../models/chatSchema")
const convoSchema = require("../../models/convoSchema")

const sendMsg = async (req,res)=>{

    const {reciverID, content, conversationID} = req.body

    if(!reciverID){
        return res.status(400).send("Something went wrong")
    }

    if(!content){
        return res.status(400).send("Something went wrong")
    }

    if(!conversationID){
        return res.status(400).send("Something went wrong")
    }

    const newMsg = new chatSchema({
        sender : req.user.id,
        reciver : reciverID,
        content,
        conversations : conversationID
    })

    newMsg.save()

    await convoSchema.findByIdAndUpdate(conversationID, {lastMsg : newMsg})

    return res.status(200).send(newMsg)
}

module.exports = sendMsg