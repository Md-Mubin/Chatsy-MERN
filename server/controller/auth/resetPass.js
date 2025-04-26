const userSchema = require("../../models/userSchema")

const resetPass = async (req, res) => {

    try {
        const { newPass } = req.body

        if (!newPass) return res.status(400).send({ error: "Pass Required" })

        const randomString = req.params.randomString

        const email = req.query.email

        // check if the user exists
        const existUser = await userSchema.findOne({ email, resetPassId: randomString, resetPassIdExpiresAt: { $gt: Date.now() } })
        if (!existUser) return res.status(400).send({ error: "Invalid Request" })

        existUser.pass = newPass
        existUser.resetPassId = null
        existUser.resetPassIdExpiresAt = null
        existUser.save()
        res.status(200).send({ error: "Password Reset Successfull" })
    } catch (error) {
        return res.status(500).send({ error: "Server Error" })
    }
}

module.exports = resetPass