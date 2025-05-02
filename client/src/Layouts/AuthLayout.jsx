import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router'

const AuthLayout = () => {

    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
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