import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router'

const AuthLayout = () => {

    // navigation 
    const navigate = useNavigate()

    // getting user data from redux
    const user = useSelector((state) => state.user)

    // useEffect for rendering
    useEffect(() => {
        if (user) {
            navigate("/chats")
        }
    }, [])

    return (
        <>
            <Outlet />
        </>
    )
}

export default AuthLayout