import React, { useState } from 'react'
import { Link } from 'react-router'
import { authoraizations } from '../Services/api'

const ForgetPass = () => {

    const [email, setEmail] = useState("")

    const handleResetPass = async (e)=>{
        e.preventDefault()
        try {
            const response = await authoraizations.resetPass(email)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <section className='w-full h-[100dvh] grid tracking-widest'>
                <ul className='bg-gradient-to-l from-[#0e0e14] to-[#2b2e36] w-[550px] m-auto p-10'>
                    <li className='text-[#fff] text-4xl text-center mb-10'>Please Enter Your Email to Reset Password</li>

                    <li>
                        <form onSubmit={handleResetPass} className='flex flex-col gap-5'>

                            <div className='input-group'>
                                <input
                                    type="email"
                                    required
                                    placeholder=' ' 
                                    onChange={(e)=>setEmail(e.target.value)}/>
                                <label>Email</label>
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