const generateRandomString = require("../../helpers/generateRandomString")
const { resetPassOTP } = require("../../helpers/mailOTP")
const resetPassTamplet = require("../../helpers/resetPassTamplete")
const userSchema = require("../../models/userSchema")

const forgetPass = async (req, res) => {

    try {
        const { email } = req.body

        if (!email) return res.status(400).send({ error: "Email Required" })

        // to check if the user exists
        const existUser = await userSchema.findOne({ email })
        if (!existUser) return res.status(400).send({ error: "Something Went Wrong" })

        // create new string for resety pass link
        const createdString = generateRandomString(30)

        existUser.resetPassId = createdString
        existUser.resetPassIdExpiresAt = new Date(Date.now() + 5 * 60 * 1000)
        existUser.save()

        // passing data to resetPassOtp function 
        resetPassOTP(existUser.name, email, "Reset Password", resetPassTamplet, createdString)

        res.status(200).send({ msg: "Reset Pass Check Your Email" })
    } catch (error) {
        return res.status(500).send({ error: "Server Error" })
    }
}

module.exports = forgetPass