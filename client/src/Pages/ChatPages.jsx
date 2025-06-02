import ConvoList from '../Components/ConvoList'
import Chats from '../Components/Chats'
import ConvoCreate from '../Components/ConvoCreate'
import { useSelector } from 'react-redux'

const ChatPages = () => {
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
                            <Chats />
                        </li>
                        :
                        <li className='flex justify-center items-center w-full h-full'>
                            <h3 className='text-4xl text-[#515257]'>Please Select A Chat to Start/Continue Conversation</h3>
                        </li>
                }
            </ul>
        </>
    )
}

export default ChatPages