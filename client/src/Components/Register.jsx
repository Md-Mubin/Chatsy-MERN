import React from 'react'
import { Link } from 'react-router'

const Register = () => {
    return (
        <>
            <section className="bg-[#2b2b37] w-full h-[100dvh] grid">
                <div className="p-8 bg-[#343a4f] rounded-lg shadow-xl w-full sm:w-[600px] m-auto">

                    <h2 className="text-center text-3xl font-extrabold text-white">
                        Welcome to Chatsy
                    </h2>
                    <p className="mt-4 text-center text-gray-400">Sign in to continue</p>

                    <form method="POST" className="mt-8 space-y-6">
                        <ul className="rounded-md shadow-sm">
                            <li>
                                <input
                                    placeholder="Email address"
                                    className="w-full px-3 py-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring  focus:ring-indigo-500 tracking-widest"
                                    type="email"/>
                            </li>
                            
                            <li className="mt-4">
                                <input
                                    placeholder="Password"
                                    className="w-full px-3 py-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring  focus:ring-indigo-500 tracking-widest"
                                    type="password"/>
                            </li>
                        </ul>

                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center">
                                <input
                                    className="h-4 w-4 border-gray-600 rounded outline-none"
                                    type="checkbox"/>

                                <span className="ml-2 block text-sm text-gray-400">Remember me</span>
                            </div>

                            <div className="text-sm">
                                <a className="font-medium text-indigo-500 hover:text-indigo-400" href="#">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button className="w-full py-3 px-4 text-sm font-medium rounded-md text-gray-900 bg-indigo-500 hover:bg-indigo-600">
                                Sign In
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 px-8 py-4 bg-gray-700 text-center">
                        <span className="text-gray-400">Don't have an account?</span>
                        <Link className="font-medium text-indigo-500 hover:text-indigo-400" to="/">
                            Sign up
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register