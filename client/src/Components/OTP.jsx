import React, { useState } from 'react'
import { InputOtp } from "@heroui/input-otp"
import { authoraizations } from '../Services/api'
import { useParams } from 'react-router'

const OTP = () => {

    // getting dynamic email from params 
    const params = useParams().email

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
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <section className='bg-[#2b2b37] w-full h-[100dvh] grid tracking-widest'>
                <form onSubmit={submitOTP} className='w-[550px] m-auto'>
                    <div className="w-[800px] flex flex-col items-start gap-2">
                        <InputOtp
                            length={4}
                            value={otpForm}
                            onValueChange={setOtpForm}
                            classNames={{
                                segmentWrapper: "flex gap-x-3",
                                segment: [
                                    "flex items-center justify-center relative transition-all duration-100 ease-in text-4xl font-bold relative p-16 text-[#fff] bg-[#434352] first:rounded-l-md last:rounded-r-md appearance-none border-0 outline-0 data-[active=true]:ring-4 data-[active=true]:ring-[#434352]"]
                            }} />

                        <button className='px-6 py-2 bg-[#fff]'>Otp Verified</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default OTP