const userSchema = require("../../models/userSchema")
const jwt = require("jsonwebtoken")

const login = async (req, res) => {

    try {
        const { email, pass } = req.body

        if (!email) return res.status(400).send({ error: "Email Required" })

        // to check if the user exists
        const existUser = await userSchema.findOne({ email })
        if (!existUser) return res.status(400).send({ error: "Something Went Wrong" })

        if (!pass) return res.status(400).send({ error: "Password Required" })

        // to check the password 
        const passCheck = await existUser.isPassValid(pass)
        if (!passCheck) return res.status(400).send({ error: "Something Went Wrong" })

        if (!existUser.isVerified) return res.status(400).send({ error: "Something Went Wrong" })

        // create data set to make changes 
        const loggedUser = existUser.toObject()

        delete loggedUser.pass
        delete loggedUser.OTP
        delete loggedUser.OTP_expire

        // create access token 
        const access_token = jwt.sign({
            data: {
                email: existUser.email,
                id: existUser._id
            }
        }, process.env.SECRET_ACC_TOKEN, { expiresIn: "1h" })

        return res.status(200).cookie(access_token).send({ msg: "Login Successfull", loggedUser, access_token })
    } catch (error) {
        return res.status(500).send({ error: "Server Error" })
    }
}

module.exports = login