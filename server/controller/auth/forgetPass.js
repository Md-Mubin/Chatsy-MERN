const generateRandomString = require("../../helpers/generateRandomString")
const { resetPassOTP } = require("../../helpers/mailOTP")
const resetPassTamplet = require("../../helpers/resetPassTamplete")
const userSchema = require("../../models/userSchema")

const forgetPass = async (req, res) => {

    const { email } = req.body

    try {
        if (!email) return res.status(400).send("Email Required")

        const existUser = await userSchema.findOne({ email })
        if (!existUser) return res.status(400).send("Something Went Wrong")

        const createdString = generateRandomString(30)

        existUser.resetPassId = createdString
        existUser.resetPassIdExpiresAt = new Date(Date.now() + 5 * 60 * 1000)
        existUser.save()

        resetPassOTP(existUser.name, email, "Reset Password", resetPassTamplet, createdString)

        res.status(200).send("Reset Pass Check Your Email")
    } catch (error) {
        return res.status(500).send("Server Error")
    }
}

module.exports = forgetPass