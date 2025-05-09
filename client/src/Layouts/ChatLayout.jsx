import React from 'react'
import { Navigate, Outlet } from 'react-router'
import Navbar from '../Components/Navbar'
import { useSelector } from "react-redux"

const ChatLayout = () => {

    // getting user data from redux
    const user = useSelector((state) => state.loggedUserData.user)

    // for rendering
    if (!user) {
        return <Navigate to={"/"}/>
    }

    return (
        <>
            <div className='bg-gradient-to-br from-[#191921] to-[#22252c] w-full h-[100dvh] flex'>
                <Navbar />
                <Outlet />
            </div>
        </>
    )
}

export default ChatLayout