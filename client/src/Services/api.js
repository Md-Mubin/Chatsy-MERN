import axios from "axios"

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_API,
    headers: {
        "Content-Type": "application/json"
    }
})

export const authoraizations = {
    registration: async (registerData) => {
        const res = await api.post("/auth/register", registerData)
        return res.data
    },

    login: async (loginData) => {
        const res = await api.post("/auth/login", loginData)
        return res.data
    }
} 