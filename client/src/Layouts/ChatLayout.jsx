import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'

const ChatLayout = () => {
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