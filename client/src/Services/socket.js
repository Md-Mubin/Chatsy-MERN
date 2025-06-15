import io from "socket.io-client"
import store from "../Store/index"
import { newMassage } from "../Store/Slices/convoListSlice"

let socket

const inSocket = ()=>{
    socket = io.connect(import.meta.env.VITE_BASE_URL_API)

    socket.on("newMassage",(res)=>{
        store.dispatch(newMassage(res))
    })

    socket.on("connect",()=>{
        console.log("connect")
    })

    socket.emit("join_user", store.getState().authSlice.user._id)
}

export {inSocket, socket}