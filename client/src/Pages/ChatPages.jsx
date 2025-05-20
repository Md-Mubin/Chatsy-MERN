import ConvoList from '../Components/ConvoList'
import Chats from '../Components/Chats'
import ConvoCreate from '../Components/ConvoCreate'

const ChatPages = () => {
    return (
        <>
            <ul className='flex w-full'>
                <li className='pt-4 px-2 border-r-2 border-[#515257]'>
                    <ConvoCreate />
                    <ConvoList />
                </li>
                <li className='w-full'>
                    <Chats />
                </li>
            </ul>
        </>
    )
}

export default ChatPages