import React, { useState } from 'react'
import { InputOtp } from "@heroui/input-otp"
import { authoraizations } from '../Services/api'
import { useNavigate, useParams } from 'react-router'
import { Bounce, toast, ToastContainer } from 'react-toastify'

const OTP = () => {

    // getting dynamic email from params 
    const params = useParams().email

    // navigation 
    const navigate = useNavigate()

    // hooks
    const [otpForm, setOtpForm] = useState("")

    // handling submit OTP
    const submitOTP = async (e) => {
        e.preventDefault()
        try {
            // const sendData = {
            //     email: params,
            //     OTP: otpForm
            // }

            const res = await authoraizations.emailVerify(params, otpForm)
            toast.success(res.msg)

            setTimeout(() => {
                navigate("/")
            }, 1500);
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

            {/* ================== OTP Part Start ================== */}
            <section className='bg-[#2b2b37] w-full h-[100dvh] grid tracking-widest'>
                <form onSubmit={submitOTP} className='m-auto'>
                    <h2 className='text-4xl font-normal text-[#fff] text-center mb-10'>Check Your Email for OTP</h2>
                    <div className="flex flex-col items-center gap-2">
                        <InputOtp
                            length={4}
                            errorMessage 
                            value={otpForm}
                            onValueChange={setOtpForm}
                            classNames={{
                                segmentWrapper: "flex gap-x-3",
                                segment: [
                                    "relative flex justify-center items-center p-4 duration-100 text-4xl font-bold relative w-30 h-30 text-[#fff] bg-[#434352] first:rounded-l-xl last:rounded-r-xl data-[active=true]:ring-5 data-[active=true]:ring-[#434352]"]
                            }} />

                        <button className='submitBtn w-full bg-[#434352]! mt-10!'>Otp Verified</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default OTP