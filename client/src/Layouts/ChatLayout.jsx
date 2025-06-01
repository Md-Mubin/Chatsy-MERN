import React from 'react'
import { Navigate, Outlet } from 'react-router'
import Navbar from '../Components/Navbar'
import { useSelector } from "react-redux"

const ChatLayout = () => {
    
    // data from redux
    const { user } = useSelector((state) => state.loggedUserData)

    // checking
    if (!user) {
        return <Navigate to={"/"} />
    }

    return (
        <>
            <div className='w-full h-[100dvh] flex'>
                <Navbar />
                <Outlet />
            </div>
        </>
    )
}

export default ChatLayout