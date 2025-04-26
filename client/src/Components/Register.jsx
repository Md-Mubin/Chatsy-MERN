import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { Bounce, ToastContainer } from "react-toastify"

const Register = () => {

    const navigate = useNavigate()
    const [regForm, setRegForm] = useState({
        name: "",
        email: "",
        pass: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={800}
                rtl={false}
                draggable
                theme="dark"
                transition={Bounce}
            />
            <section className='bg-[#2b2b37] w-full h-[100dvh] grid tracking-widest'>
                <ul className='bg-[#212121] w-[550px] m-auto p-10'>
                    <li className='text-[#fff] text-4xl text-center mb-10'>Please Register</li>

                    <li>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>

                            <div className='input-group'>
                                <input
                                    type="text"
                                    required
                                    placeholder=' '
                                    onChange={(e) => setRegForm((prev) => ({ ...prev, name: e.target.value }))} />
                                <label>Name</label>
                            </div>

                            <div className='input-group'>
                                <input
                                    type="email"
                                    required
                                    placeholder=' '
                                    onChange={(e) => setRegForm((prev) => ({ ...prev, email: e.target.value }))} />
                                <label>Email</label>
                            </div>

                            <div className='input-group'>
                                <input
                                    type="password"
                                    placeholder=' '
                                    onChange={(e) => setRegForm((prev) => ({ ...prev, pass: e.target.value }))} />
                                <label>Password</label>
                            </div>

                            <div className='register_login justify-center!'>
                                <Link to={"/"}>Already Have Account? Go to Login</Link>
                            </div>

                            <button className='submitBtn'>Login</button>
                        </form>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Register