const chatSchema = require("../../models/chatSchema")

const getMsg = async (req,res)=>{

    const {conversationID} = req.params

    if(!conversationID){
        return res.status(400).send("No massage foound")
    }

    const getMassage = await chatSchema.find({conversations : conversationID})

    if(!getMassage){
        return res.status(400).send("No massage foound")
    }

    res.status(200).send(getMassage)
}

module.exports = getMsg