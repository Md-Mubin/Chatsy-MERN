import React from 'react'
import { Link } from 'react-router'

const Login = () => {
  return (
    <>
      <section className='bg-[#2b2b37] w-full h-[100dvh] grid tracking-widest'>
        <ul className='bg-[#212121] w-[550px] m-auto p-10'>
          <li className='text-[#fff] text-4xl text-center mb-10'>Please Login</li>

          <li>
            <form className='flex flex-col gap-5'>

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

              <div className='register_login'>
                <Link to={"/forget_password"}>Forget Password?</Link>
                <Link to={"/register"}>Go To Registration</Link>
              </div>

              <button className='submitBtn'>Login</button>
            </form>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Login