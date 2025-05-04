import React from 'react'
import ConvoList from '../Components/ConvoList'
import Chats from '../Components/Chats'

const ChatPages = () => {
    return (
        <>
            <div className='flex'>
                <ConvoList />
                <Chats />
            </div>
        </>
    )
}

export default ChatPages