import React from 'react'
import { Navigate, Outlet } from 'react-router'
import Navbar from '../Components/Navbar'
import { useSelector } from 'react-redux'

const ProfileLayout = () => {

    // data from redux
    const { user } = useSelector((state) => state.loggedUserData)

    // checking
    if (!user) {
        return <Navigate to={"/"} />
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

export default ProfileLayout