const chatSchema = require("../../models/chatSchema")
const convoSchema = require("../../models/convoSchema")

const sendMsg = async (req,res)=>{

    const {reciverID, content, conversationID} = req.body

    // if there is no reciver ID
    if(!reciverID){
        return res.status(400).send("Something went wrong")
    }

    // if there is no content
    if(!content){
        return res.status(400).send("Something went wrong")
    }

    // if there is no conversation ID
    if(!conversationID){
        return res.status(400).send("Something went wrong")
    }

    // create new massage
    const newMsg = new chatSchema({
        sender : req.user.id,
        reciver : reciverID,
        content,
        conversations : conversationID
    })

    newMsg.save()

    // send last msg to conversation list schema
    await convoSchema.findByIdAndUpdate(conversationID, {lastMsg : newMsg})

    return res.status(200).send(newMsg)
}

module.exports = sendMsg