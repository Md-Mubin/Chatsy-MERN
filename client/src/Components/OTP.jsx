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
            const sendData = {
                email: params,
                OTP: otpForm
            }

            const res = await authoraizations.emailVerify(sendData)
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
                    <div className="flex flex-col items-center gap-2">
                        <InputOtp
                            length={4}
                            value={otpForm}
                            onValueChange={setOtpForm}
                            classNames={{
                                segmentWrapper: "flex gap-x-3",
                                segment: [
                                    "relative transition-all duration-100 ease-in text-4xl font-bold relative p-16 text-[#fff] bg-[#434352] first:rounded-l-md last:rounded-r-md appearance-none border-0 outline-0 data-[active=true]:ring-4 data-[active=true]:ring-[#434352]"]
                            }} />

                        <button className='submitBtn w-full bg-[#434352]!'>Otp Verified</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default OTP