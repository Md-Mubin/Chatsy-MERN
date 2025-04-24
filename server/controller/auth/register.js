const emailValid = require("../../helpers/emailValid")
const emailVarifiedTemplet = require("../../helpers/emailVerifiedTamplet")
const { mailOTP } = require("../../helpers/mailOTP")
const passValid = require("../../helpers/passValid")
const userSchema = require("../../models/userSchema")

const register = async (req, res) => {

    const { name, email, pass } = req.body

    try {
        if (!name) return res.status(400).send("Name Required")

        if (!email) return res.status(400).send("Email Required")

        if (!emailValid(email)) return res.status(400).send("Email is not valid")

        const existUser = await userSchema.findOne({ email })
        if (existUser) return res.status(400).send("User Already Exists")

        if (!pass) return res.status(400).send("Password Required")

        if (passValid(pass)) return res.status(400).send(passValid(pass))

        const randomOTP = Math.floor(1000 + Math.random() * 9000)

        const newUser = new userSchema({
            name,
            email,
            pass,
            OTP: randomOTP,
            OTP_expire: new Date(Date.now() + 5 * 60 * 1000)
        })

        mailOTP(name, email, "Verify with OTP", emailVarifiedTemplet, randomOTP)

        newUser.save()

        return res.status(200).send("Register Successfull")
    } catch (error) {
        return res.status(500).send("Server Error")
    }
}

module.exports = register