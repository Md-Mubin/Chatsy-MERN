const emailValid = require("../../helpers/emailValid")
const emailVarifiedTemplet = require("../../helpers/emailVerifiedTamplet")
const { mailOTP } = require("../../helpers/mailOTP")
const passValid = require("../../helpers/passValid")
const userSchema = require("../../models/userSchema")

const register = async (req, res) => {

    try {
        const { name, email, pass } = req.body

        if (!name) return res.status(400).send({ error: "Name Required" })

        if (!email) return res.status(400).send({ error: "Email Required" })

        if (!emailValid(email)) return res.status(400).send({ error: "Email is not valid" })

        // check if the user with the email already exists
        const existUser = await userSchema.findOne({ email })
        if (existUser) return res.status(400).send({ error: "User Already Exists" })

        if (!pass) return res.status(400).send({ error: "Password Required" })

        if (passValid(pass)) return res.status(400).send(passValid(pass))

        // generate random OTP
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

        return res.status(200).send({ msg: "Register Successfull" })
    } catch (error) {
        return res.status(500).send({ error: "Server Error" })
    }
}

module.exports = register