const userSchema = require("../../models/userSchema")

const resetPass = async (req, res) => {

    try {
        const { newPass } = req.body

        const randomString = req.params.randomString

        const email = req.query.email

        if (!newPass) return res.status(400).send("Pass Required")

        const existUser = await userSchema.findOne({ email, resetPassId: randomString, resetPassIdExpiresAt: { $gt: Date.now() } })
        if (!existUser) return res.status(400).send("Invalid Request")

        existUser.pass = newPass
        existUser.resetPassId = null
        existUser.resetPassIdExpiresAt = null
        existUser.save()
        res.status(200).send("Password Reset Successfull")
    } catch (error) {
        return res.status(500).send("Server Error")
    }
}

module.exports = resetPass