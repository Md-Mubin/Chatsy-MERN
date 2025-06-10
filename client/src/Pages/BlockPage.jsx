import React from 'react'
import { useSelector } from 'react-redux'

const BlockPage = () => {

    const { selectedConvo } = useSelector((state) => state.convoListSlice)

    return (
        <>
            <ul className='flex w-full'>
                <li className='pt-4 px-2 border-r-2 border-[#515257] '>
                </li>
            </ul>
        </>
    )
}

export default BlockPage