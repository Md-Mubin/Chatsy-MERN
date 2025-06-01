import React from 'react'
import ConvoCreate from '../Components/ConvoCreate'
import ConvoList from '../Components/ConvoList'
import GroupChats from '../Components/GroupChats'

const GroupPage = () => {


    return (
        <>
            <ul className='flex w-full'>
                <li className='pt-4 px-2 border-r-2 border-[#515257]'>
                    {/* <ConvoCreate />
                    <ConvoList /> */}
                </li>

                <li className='w-full'>
                    <GroupChats />
                </li>
            </ul>
        </>
    )
}

export default GroupPage