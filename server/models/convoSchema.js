const mongoose = require("mongoose")
const SCHEMA = mongoose.Schema

const convoSchema = new SCHEMA({
    creator : {
        type : SCHEMA.Types.ObjectId,
        ref : "userProfile",
        required : true
    },

    participent : {
        type : SCHEMA.Types.ObjectId,
        ref : "userProfile",
        required : true
    },

    lastMsg : {
        type : SCHEMA.Types.ObjectId,
        ref : "chatMsg"
    }, 

    msgSeen : {
        type : Boolean, 
        default : false
    }

},{timestamps : true})

module.exports = mongoose.model("convoData", convoSchema)