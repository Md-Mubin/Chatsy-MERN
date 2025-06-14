import React from 'react'
import { useSelector } from 'react-redux'
import BlockList from '../Components/BlockList'

const BlockPage = () => {

    const { selectedConvo } = useSelector((state) => state.convoListSlice)

    return (
        <>
            <div className='flex w-full'>
                <ul className='pt-4 px-2 border-r-2 border-[#515257] '>
                    <li>
                        <h1 className='font-normal text-5xl text-[#88d4ca]'>Chatsy</h1>
                    </li>
                    <li>
                        <BlockList />
                    </li>
                </ul>
                <ul>
                    {
                        selectedConvo
                            ?
                            <li className='w-full hidden lg:block'>
                                <Chats />
                            </li>
                            :
                            <li className=' justify-center items-center w-full h-full hidden lg:flex'>
                                <h3 className='text-3xl xl:text-4xl text-[#515257] text-center'>Please Select A Chat to see the conversation</h3>
                            </li>
                    }
                </ul>
            </div>
        </>
    )
}

export default BlockPage