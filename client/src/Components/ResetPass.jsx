import React, { useState } from 'react'
import { Link } from 'react-router'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const ResetPass = () => {

    const [show, setShow] = useState(false)

    return (
        <>
            <section className='w-full h-[100dvh] grid tracking-widest'>
                <ul className='bg-gradient-to-l from-[#0e0e14] to-[#2b2e36] w-[550px] m-auto p-10'>
                    <li className='text-[#fff] text-4xl text-center mb-10'>Enter Your New Password</li>
                    <li>
                        <form className='flex flex-col gap-5'>

                            <div className='input-group'>
                                <input
                                    type={`${show ? "text" : "password"}`}
                                    required
                                    placeholder=' '
                                />
                                <label>Password</label>

                                <span onClick={() => setShow(!show)} className='absolute top-5 right-5 text-2xl text-[#777] hover:text-[#28e98c] cursor-pointer duration-200'>
                                    {
                                        show
                                            ? <FaRegEye />
                                            : <FaRegEyeSlash />
                                    }
                                </span>
                            </div>

                            <div className='register_login justify-end!'>
                                <Link to={"/forget_password"}>←Go Back</Link>
                            </div>

                            <button className='submitBtn'>Submit New Password</button>
                        </form>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default ResetPass