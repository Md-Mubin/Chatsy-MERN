import ConvoList from '../Components/ConvoList'
import Chats from '../Components/Chats'
import ConvoCreate from '../Components/ConvoCreate'
import { useSelector } from 'react-redux'

const ChatPages = () => {
    const { selectedConvo } = useSelector((state) => state.convoListSlice)

    return (
        <>
            <ul className='flex w-full'>
                <li className='pt-4 px-2 border-r-2 border-[#515257] '>
                    <ConvoCreate />
                    <ConvoList />
                </li>
                {
                    selectedConvo
                        ?
                        <li className='w-full hidden lg:block'>
                            <Chats />
                        </li>
                        :
                        <li className=' justify-center items-center w-full h-full hidden lg:flex'>
                            <h3 className='text-3xl xl:text-4xl text-[#515257] text-center'>Please Select A Chat to Start/Continue Conversation</h3>
                        </li>
                }
            </ul>
        </>
    )
}

export default ChatPages