const mongoose = require("mongoose")
const SCHEMA = mongoose.Schema

const chatSchema = new SCHEMA({
    sender : {
        type : SCHEMA.Types.ObjectId,
        ref : "userProfile",
        required : true
    },

    reciver : {
        type : SCHEMA.Types.ObjectId,
        ref : "userProfile",
        required : true
    },

    content:{
        type : String
    },

    conversations : {
        type : SCHEMA.Types.ObjectId,
        ref : "convoData"
    }

},{timestamps : true})

module.exports = mongoose.model("chatMsg", chatSchema)