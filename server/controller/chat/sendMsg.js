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
}

module.exports = sendMsg