import React from 'react'
import { useSelector } from 'react-redux'
import BlockList from '../Components/BlockList'
import Chats from '../Components/Chats'

const BlockPage = () => {

    const { selectedConvo } = useSelector((state) => state.convoListSlice)

    return (
        <>
            <ul className='flex w-full'>
                <li className='pt-4 px-2 border-r-2 border-[#515257]'>
                    <h1 className='font-normal text-5xl text-[#88d4ca]'>Chatsy</h1>
                    <BlockList />
                </li>
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
        </>
    )
}

export default BlockPage