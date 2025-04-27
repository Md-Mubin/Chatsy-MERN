import axios from "axios"

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_API,
    headers: {
        "Content-Type": "application/json"
    }
})

export const authoraizations = {
    // for register
    registration: async (registerData) => {
        const res = await api.post("/auth/register", registerData)
        return res.data
    },

    // for login
    login: async (loginData) => {
        const res = await api.post("/auth/login", loginData)
        return res.data
    },

    // for otp to verify email
    emailVerify : async(otpData)=>{
        const res = await api.post("/auth/emailVarified", otpData)
        return res.data
    }
} 