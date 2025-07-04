import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { Bounce, toast, ToastContainer } from "react-toastify"
import { authoraizations } from '../Services/api'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const Register = () => {

    // navigation
    const navigate = useNavigate()

    // useState hooks 
    const [show, setShow] = useState(false)
    const [regForm, setRegForm] = useState({
        name: "",
        email: "",
        pass: ""
    })

    // handling submit part for registration
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await authoraizations.registration(regForm)
            toast.success(res.msg)
            setTimeout(() => {
                navigate(`/OTP/${regForm.email}`)
            }, 2000);
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

            {/* ================== Registration Part Start ================== */}
            <section className=' w-full h-[100dvh] grid tracking-widest'>
                <ul className='bg-gradient-to-l from-[#0e0e14] to-[#2b2e36] w-[550px] m-auto p-10'>
                    <li className='text-[#fff] text-4xl text-center mb-10'>Please Register</li>

                    <li>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>

                            <div className='input-group'>
                                <input
                                    id='register_name'
                                    type="text"
                                    required
                                    placeholder=' '
                                    onChange={(e) => setRegForm((prev) => ({ ...prev, name: e.target.value }))} />
                                <label htmlFor='register_name'>Name</label>
                            </div>

                            <div className='input-group'>
                                <input
                                    id='register_email'
                                    type="email"
                                    required
                                    placeholder=' '
                                    onChange={(e) => setRegForm((prev) => ({ ...prev, email: e.target.value }))} />
                                <label htmlFor='register_email'>Email</label>
                            </div>

                            <div className='input-group'>
                                <input
                                id='register_pass'
                                    type={`${show ? "text" : "password"}`}
                                    placeholder=' '
                                    onChange={(e) => setRegForm((prev) => ({ ...prev, pass: e.target.value }))} />
                                <label htmlFor='register_pass'>Password</label>
                                <span onClick={() => setShow(!show)} className='absolute top-5 right-5 text-2xl text-[#777] hover:text-[#28e98c] cursor-pointer duration-200'>
                                    {
                                        show
                                            ? <FaRegEye />
                                            : <FaRegEyeSlash />
                                    }
                                </span>
                            </div>

                            <div className='register_login justify-center!'>
                                <Link to={"/"}>Already Have Account? Go to Login</Link>
                            </div>

                            <button className='submitBtn'>Register</button>
                        </form>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Register