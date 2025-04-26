import React from 'react'
import { Link } from 'react-router'

const Register = () => {
    return (
        <>
            <section className='bg-[#2b2b37] w-full h-[100dvh] grid tracking-widest'>
                <ul className='bg-[#212121] w-[550px] m-auto p-10'>
                    <li className='text-[#fff] text-4xl text-center mb-10'>Please Register</li>

                    <li>
                        <form className='flex flex-col gap-5'>

                            <div className='input-group'>
                                <input
                                    type="text"
                                    required
                                    placeholder=' ' />
                                <label>Name</label>
                            </div>

                            <div className='input-group'>
                                <input
                                    type="email"
                                    required
                                    placeholder=' ' />
                                <label>Email</label>
                            </div>

                            <div className='input-group'>
                                <input
                                    type="password"
                                    placeholder=' ' />
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