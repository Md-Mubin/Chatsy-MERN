import axios from "axios"

const api = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL_API}/api/v1`,
    headers: {
        "Content-Type": "application/json"
    }
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    if (token) {
        config.headers.Authorization = token
    }
    return config
},
    (err) => {
        return Promise.reject(err)
    }
)

// api authentication
export const authoraizations = {
    // for register
    registration: async (registerData) => {
        const res = await api.post("/auth/register", registerData)
        return res.data
    },

    // for login
    login: async (loginData) => {
        const res = await api.post("/auth/login", loginData)
        if (res.data.access_token) {
            localStorage.setItem("token", res.data.access_token)
            localStorage.setItem("loggedUser", JSON.stringify(res.data.loggedUser))
        }
        return res.data
    },

    // for otp to verify email
    emailVerify: async (email, OTP) => {
        const res = await api.post("/auth/emailVarified", { email, OTP })
        return res.data
    },

    // for forget password password
    forgetpass: async (email) => {
        const res = await api.post("/auth/forgetpass", { email })
        return res.data
    },

    // for submiting new password
    resetPass: async (newPass, randomString, email) => {
        const res = await api.post(`/auth/resetPass/${randomString}?email=${email}`, { newPass })
        return res.data
    },

    // update user profile
    updateData: async (name, pass, avatar) => {
        const res = await api.post("/auth/update", { name, pass, avatar }, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        return res.data
    }
}

// api chating
export const chattings = {
    // for conversation list
    convoList: async () => {
        const res = await api.get("/chat/convoList")
        return res.data
    },

    // create conversation 
    createConvo: async (participentEmail) => {
        const res = await api.post("/chat/createConvo", { participentEmail })
        return res.data
    },

    // send massages
    sendMassage: async (reciverID, content, conversationID) => {
        const res = await api.post("/chat/sendMsg", { reciverID, content, conversationID })
        return res.data
    },

    // get massages
    getMassage: async (conversationID) => {
        const res = await api.get(`/chat/getMsg/${conversationID}`)
        return res.data
    },

    // delete conversation
    deleteConvo: async (deletChatByUserId) => {
        const res = await api.post("/chat/deleteConvo", { deletChatByUserId })
        return res.data
    },

    // delete conversation
    blockChat: async (blockConvo) => {
        const res = await api.post("/chat/blockConvo", { blockConvo })
        return res.data
    }
}