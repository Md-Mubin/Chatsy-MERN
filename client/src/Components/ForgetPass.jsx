import React, { useState } from 'react'
import { Link } from 'react-router'
import { authoraizations } from '../Services/api'
import { Bounce, toast, ToastContainer } from 'react-toastify'

const ForgetPass = () => {

    const [email, setEmail] = useState("")

    const handleResetPass = async (e) => {
        e.preventDefault()
        try {
            const response = await authoraizations.forgetpass(email)
            toast.success(response.msg)
        } catch (error) {
            toast.error(error.response.data.error)
        }
    }

    return (
        <>
            {/* ============ Toast Container ============ */}
            <ToastContainer
                position="top-right"
                autoClose={800}
                rtl={false}
                draggable
                theme="dark"
                transition={Bounce}
            />

            {/* ================== Forget Password Part Start ================== */}
            <section className='w-full h-[100dvh] grid tracking-widest'>
                <ul className='bg-gradient-to-l from-[#0e0e14] to-[#2b2e36] w-[550px] m-auto p-10'>
                    <li className='text-[#fff] text-4xl text-center mb-10'>Please Enter Your Email to Reset Password</li>

                    <li>
                        <form onSubmit={handleResetPass} className='flex flex-col gap-5'>

                            <div className='input-group'>
                                <input
                                    id='forget_pass_email'
                                    type="email"
                                    required
                                    placeholder=' '
                                    onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor='forget_pass_email'>Email</label>
                            </div>

                            <div className='register_login justify-end!'>
                                <Link to={"/"}>←Go Back</Link>
                            </div>

                            <button className='submitBtn'>Reset Password</button>
                        </form>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default ForgetPass