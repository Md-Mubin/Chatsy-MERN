import React from 'react'

const ForgetPass = () => {
    return (
        <>
            <section className='bg-[#2b2b37] w-full h-[100dvh] grid tracking-widest'>
                <ul className='bg-[#212121] w-[550px] m-auto p-10'>
                    <li className='text-[#fff] text-4xl text-center mb-10'>Please Enter Your Email to Reset Password</li>

                    <li>
                        <form className='flex flex-col gap-5'>

                            <div className='input-group'>
                                <input
                                    type="email"
                                    required
                                    placeholder=' ' />
                                <label>Email</label>
                            </div>

                            <div className='register_login justify-end!'>
                                <Link to={"/login"}>←Go Back</Link>
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