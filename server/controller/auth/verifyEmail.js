const userSchema = require("../../models/userSchema")

const verifyEmail = async (req, res) => {

    try {
        const { email, OTP } = req.body

        // check if email / OTP is inputed
        if (!email) return res.status(400).send({ error: "Invalid Request" })
        if (!OTP) return res.status(400).send({ error: "Invalid Request" })

        // varifing
        const verified_ID = await userSchema.findOne({ email, OTP, OTP_expire: { $gt: Date.now() } })

        if (!verified_ID) {

            // if using wrong otp more than 3 time than the id will block and wont be able to verify 
            const failedAttempt = await userSchema.findOneAndUpdate({ email }, { $inc: { otpFailedAttempt: 1 } }, { new: true })
            if (failedAttempt.otpFailedAttempt === 5) {

                failedAttempt.otpFailedAttempt = null,
                    failedAttempt.OTP = null,
                    failedAttempt.OTP_expire = null,
                    failedAttempt.isVerified = false
                failedAttempt.save()
                return res.status(400).send({ error: "Blocked! Try Again Letter" })
            }
            return res.status(400).send({ error: "Invalid OTP" })
        }

        verified_ID.OTP = undefined,
            verified_ID.OTP_expire = undefined,
            verified_ID.otpFailedAttempt = undefined,
            verified_ID.isVerified = true,
            verified_ID.save()
        res.status(200).send({ msg: "Email Verification Successfull" })
    } catch (error) {
        return res.status(500).send({ error: "Server Error" })
    }
}

module.exports = verifyEmail