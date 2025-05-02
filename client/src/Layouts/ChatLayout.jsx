import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import Navbar from '../Components/Navbar'
import { useSelector } from "react-redux"
import ConvoList from '../Components/ConvoList'

const ChatLayout = () => {

    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    useEffect(() => {
        if (!user) {
            navigate("/")
        }
    }, [])

    return (
        <>
            <div className='bg-gradient-to-br from-[#191921] to-[#22252c] w-full h-[100dvh] flex'>
                <Navbar />
                <ConvoList/>
                <Outlet />
            </div>
        </>
    )
}

export default ChatLayout