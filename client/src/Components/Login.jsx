import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { authoraizations } from '../Services/api'

const Login = () => {

  // navigation
  const navigate = useNavigate()

  // useState hooks 
  const [loginForm, setLoginForm] = useState({
    email: "",
    pass: ""
  })
  // handling submit part for registration
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await authoraizations.login(loginForm)
      toast.success(res.msg)
      setTimeout(() => {
        navigate("/chat")
      }, 1000);
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

      {/* ================== Login Part Start ================== */}
      <section className='bg-[#2b2b37] w-full h-[100dvh] grid tracking-widest'>
        <ul className='bg-[#212121] w-[550px] m-auto p-10'>
          <li className='text-[#fff] text-4xl text-center mb-10'>Please Login</li>

          <li>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>

              <div className='input-group'>
                <input
                  type="email"
                  required
                  placeholder=' '
                  onChange={(e) => setLoginForm((prev) => ({ ...prev, email: e.target.value }))} />
                <label>Email</label>
              </div>

              <div className='input-group'>
                <input
                  type="password"
                  placeholder=' '
                  onChange={(e) => setLoginForm((prev) => ({ ...prev, pass: e.target.value }))} />
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