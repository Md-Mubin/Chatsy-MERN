import React from 'react'
import { Outlet, useNavigate } from 'react-router'
import Navbar from '../Components/Navbar'
import { useSelector } from "react-redux"

const ChatLayout = () => {

    const navigate = useNavigate()
    const user = useSelector((state)=>state.user)
    console.log(user)

    return (
        <>
            <div className='bg-gradient-to-br from-[#191921] to-[#22252c] w-full h-[100dvh]'>
                <Navbar/>
                <Outlet/>
            </div>
        </>
    )
}

export default ChatLayout