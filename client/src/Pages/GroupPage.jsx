import React from 'react'
import ConvoCreate from '../Components/ConvoCreate'
import ConvoList from '../Components/ConvoList'
import GroupChats from '../Components/GroupChats'
import { useSelector } from 'react-redux'

const GroupPage = () => {

    const { selectedConvo } = useSelector((state) => state.chatListsData)

    return (
        <>
            <ul className='flex w-full'>
                <li className='pt-4 px-2 border-r-2 border-[#515257]'>
                    <ConvoCreate />
                    <ConvoList />
                </li>
                {
                    selectedConvo
                        ?
                        <li className='w-full'>
                            <GroupChats />
                        </li>
                        :
                        <li className='flex justify-center items-center w-full h-full'>
                            <h3 className='text-4xl text-[#515257]'>Please Select A Group to Start Conversation</h3>
                        </li>
                }
            </ul>
        </>
    )
}

export default GroupPage