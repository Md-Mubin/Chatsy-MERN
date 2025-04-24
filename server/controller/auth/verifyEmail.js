const userSchema = require("../../models/userSchema")

const verifyEmail = async (req, res) => {

    const { email, OTP } = req.body

    try {
        // check if email / OTP is inputed
        if (!email || !OTP) return res.status(400).send("Invalid Request")

        // varifing
        const verified_ID = await userSchema.findOne({ email, OTP, OTP_expire: { $gt: Date.now() } })

        if (!verified_ID) return res.status(400).send("Invalid OTP")

        verified_ID.OTP = null,
            verified_ID.OTP_expire = null,
            verified_ID.isVerified = true,
            verified_ID.save()
        res.status(200).send("Verified Successfull")
    } catch (error) {
        return res.status(500).send("Server Error")
    }
}

module.exports = verifyEmail