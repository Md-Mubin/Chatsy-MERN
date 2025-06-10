import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import Navbar from '../Components/Navbar'

const BlockLayout = () => {

    // data from redux
    const { user } = useSelector((state) => state.authSlice)

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

export default BlockLayout