import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const NoPage = () => {

    // navigation
    const navigate = useNavigate()

    // hooks
    const { user } = useSelector((state) => state.authSlice)

    // handle going back
    const handleGoBack = ()=>{
        if(user){
            navigate("/chat")
        }else{
            navigate("/")
        }
    }

    return (
        <>
            <section className='bg-[#2b2b37] w-full h-[100dvh]'>
                <div className='h-full flex flex-col justify-center items-center w-fit m-auto'>
                    <h1 className='font-semibold text-[82px] text-[#5dc98a] tracking-widest '>
                        Sorry, No Page Found!
                    </h1>
                    <button onClick={handleGoBack} className='submitBtn ml-auto px-10'>← Go Back</button>
                </div>
            </section>
        </>
    )
}

export default NoPage