const convoSchema = require("../../models/convoSchema")

const blockConvo = async (req, res) => {

    const { blockConvo } = req.body

    if(!blockConvo){
        return res.status(400).send({error : "Try Again"})
    }

    const block = await convoSchema.findByIdAndUpdate(blockConvo, {block : true})

    if(!block){
        return res.status(400).send({error : "Try Again"})
    }

    res.status(200).send({msg : "Block Successful"})
}

module.exports = blockConvo