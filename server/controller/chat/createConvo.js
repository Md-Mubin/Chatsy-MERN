const convoSchema = require("../../models/convoSchema")
const userSchema = require("../../models/userSchema")

const createConvo = async (req, res) => {

    try {
        const { participentEmail } = req.body

        // if puts login user's email
        if (participentEmail === req.user.email) {
            return res.status(400).send({ error: "Participent email is required" })
        }

        // collect data of participent
        const participentData = await userSchema.findOne({ email: participentEmail })

        if (!participentData) {
            return res.status(400).send({ error: "No User Found" })
        }

        // check if the conversation already exists
        const existConvo = await convoSchema.findOne({
            $or: [
                {
                    creator: req.user.id,
                    participent: participentData.id

                },
                {
                    creator: participentData.id,
                    participent: req.user.id
                }
            ]
        })

        if (existConvo) {
            return res.status(400).send({ error: "Conversation Already Created" })
        }

        // creating new conversation
        const conversation = new convoSchema({
            creator: req.user.id,
            participent: participentData._id
        })

        conversation.save()

        return res.status(200).send({ msg: "Conversation Created" })
    } catch (error) {
        return res.status(500).send({ error: "Server Error" })
    }
}

module.exports = createConvo