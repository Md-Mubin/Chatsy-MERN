import io from "socket.io-client"
import store from "../Store/index"
import { newMassage } from "../Store/Slices/convoListSlice"

let socket

const inSocket = (selectedConvo)=>{
    socket = io.connect("http://localhost:8000")

    socket.on("newMassage",(res)=>{
        store.dispatch(newMassage(res))
    })

    selectedConvo.forEach(convoID => console.log(convoID));
    // socket.emit("join_room", selectedConvo)

    socket.on("connect",()=>{
        console.log("connect")
    })
}

export {socket, inSocket} 