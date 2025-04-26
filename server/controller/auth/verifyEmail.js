const userSchema = require("../../models/userSchema")

const verifyEmail = async (req, res) => {

    try {
        const { email, OTP } = req.body

        // check if email / OTP is inputed
        if (!email) return res.status(400).send({ error: "Invalid Request" })
        if (!OTP) return res.status(400).send({ error: "Invalid Request" })

        // varifing
        const verified_ID = await userSchema.findOne({ email, OTP, OTP_expire: { $gt: Date.now() } })

        if (!verified_ID) return res.status(400).send({ error: "Invalid OTP" })

        verified_ID.OTP = null,
            verified_ID.OTP_expire = null,
            verified_ID.isVerified = true,
            verified_ID.save()
        res.status(200).send({ error: "Verified! Registration Successfull" })
    } catch (error) {
        return res.status(500).send({ error: "Server Error" })
    }
}

module.exports = verifyEmail