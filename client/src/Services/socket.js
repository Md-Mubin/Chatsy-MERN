import io from "socket.io-client"
import store from "../Store/index"
import { newMassage } from "../Store/Slices/convoListSlice"

let socket

const inSocket = ()=>{
    socket = io.connect("http://localhost:8000")

    socket.on("newMassage",(res)=>{
        store.dispatch(newMassage(res))
    })

    socket.on("connect",()=>{
        console.log("connect")
    })
}
const getSocket = () => socket;
export {inSocket, getSocket}