const mongoose = require("mongoose")
const SCHEMA = mongoose.Schema
const bcrypt = require("bcrypt")

const userSchmea = new SCHEMA({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    pass: {
        type: String,
        required: true
    },

    avatar : {
        type : String,
        default : ''
    },

    OTP: {
        type: String
    },

    OTP_expire :{
        type : Date
    },

    isVerified: {
        type: Boolean,
        default: false
    },

    otpFailedAttempt :{
        type : Number,
        default : 0
    },

    resetPassId :{
        type :String
    },

    resetPassIdExpiresAt : {
        type : Date
    }
},

{
    timestamps : true
})

// creating hash password and save it in schema
userSchmea.pre("save", async function (next) {
    if (!this.isModified("pass")) return next()

    this.pass = await bcrypt.hash(this.pass, 10)
    next()
})

// check if the req password = saved hash password in the database
userSchmea.methods.isPassValid = async function(userPass) {
    return await bcrypt.compare(userPass, this.pass)
}

module.exports = mongoose.model("userProfile", userSchmea)