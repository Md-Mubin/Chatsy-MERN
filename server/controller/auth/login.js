const userSchema = require("../../models/userSchema")
const jwt = require("jsonwebtoken")

const login = async (req, res) => {

    const { email, pass } = req.body

    try {
        if (!email) return res.status(400).send("Email Required")

        const existUser = await userSchema.findOne({ email })
        if (!existUser) return res.status(400).send("Something Went Wrong")

        if (!pass) return res.status(400).send("Password Required")

        const passCheck = await existUser.isPassValid(pass)
        if (!passCheck) return res.status(400).send("Something Went Wrong")

        if (!existUser.isVerified) return res.status(400).send("Something Went Wrong")

        const loggedUser = existUser.toObject()

        delete loggedUser.pass
        delete loggedUser.OTP
        delete loggedUser.OTP_expire

        const access_token = jwt.sign({
            data: {
                email: existUser.email,
                id: existUser._id
            }
        }, process.env.SECRET_ACC_TOKEN , { expiresIn: "1h" })

        return res.status(200).cookie(access_token).send({ msg: "Login Successfull", loggedUser, access_token })
    } catch (error) {
        return res.status(500).send("Server Error")
    }
}

module.exports = login