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
        if(res.data.access_token){
            localStorage.setItem("token", res.data.access_token)
            localStorage.setItem("loggedUser", JSON.stringify(res.data.loggedUser))
        }
        return res.data
    },

    // for otp to verify email
    emailVerify : async(email , OTP)=>{
        const res = await api.post("/auth/emailVarified", {email , OTP})
        return res.data
    }
} 