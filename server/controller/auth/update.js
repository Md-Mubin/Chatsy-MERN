const cloudinary = require("../../helpers/cloudinary")
const userSchema = require("../../models/userSchema")
const fs = require("fs")

const update = async (req, res) => {

    const { name, pass } = req.body

    const existUser = await userSchema.findById(req.user.id)

    if (name) existUser.name = name.trim();
    if (pass) existUser.pass = pass;

    if (req.file.path) {
        await cloudinary.uploader.destroy(existUser.avatar.split('/').pop().split('.')[0])
        const result = await cloudinary.uploader.upload(req.file.path)
        existUser.avatar = result.url
        fs.unlinkSync(req.file.path)
    }

    existUser.save()

    return res.status(200).send({ msg: "Update Successfull" }, existUser)
}

module.exports = update