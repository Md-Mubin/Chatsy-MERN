import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const AuthLayout = () => {

    // getting user data from redux
    const user = useSelector((state) => state.user)

    // for rendering
    if (user) {
        return <Navigate to={"/chats"}/>
    }

    return (
        <>
            <Outlet />
        </>
    )
}

export default AuthLayout