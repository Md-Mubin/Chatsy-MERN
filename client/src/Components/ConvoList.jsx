import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getConvoList } from '../Store/Slices/convoListSlice'
import { PiDotsThreeOutlineVerticalThin } from "react-icons/pi";
import { chattings } from '../Services/api';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const ConvoList = () => {

    // dispatch
    const dispatch = useDispatch()

    // useState hooks
    const [allChatUser, setAllChatUser] = useState([])
    const [selectedUserId, setSelectedUserId] = useState("")

    // datas from redux
    const loggedUserData = useSelector((state) => state.loggedUserData.user)
    const allChatLists = useSelector((state) => state.chatListsData.chatList)

    // useEffect
    useEffect(() => {
        dispatch(getConvoList())

        try {
            const arr = allChatLists.map((items) => {
                if (items.creator._id === loggedUserData._id) {
                    return {
                        user: items.participent,
                        lastMsg: items.lastMsg
                    }
                } else if (items.participent._id === loggedUserData._id) {
                    return {
                        user: items.creator,
                        lastMsg: items.lastMsg
                    }
                }
            })
            setAllChatUser(arr)
        } catch (error) {
            console.log(error)
        }

    }, [allChatLists, loggedUserData])

    // handling deleting chat user
    const handleDeleteChat = async (deleteChatID) => {

        try {
            const res = await chattings.deleteConvo(deleteChatID)
            toast.success(res.msg)
        } catch (error) {
            toast.error(error.response.data.error)
        }
    }

    return (
        <>
            {/* ============ Toast Container ============ */}
            <ToastContainer
                position="top-right"
                autoClose={800}
                rtl={false}
                theme="dark"
                transition={Bounce}
            />

            {/* ================== Conversation List Part ================== */}
            <section className='convoListSec'>
                {
                    allChatUser.length === 0
                        ? <p className='text-center text-[#88d4ca]'>No Conversation Found</p>
                        : allChatUser.map((datas) => (
                            <ul key={datas.user._id} className='flex items-center gap-5 relative z-10'>
                                <li className='w-[60px] h-[60px] rounded-full bg-[#ffffff17] flex justify-center items-center'>
                                    {
                                        datas.user.avatar
                                            ? <img src={datas.user.avatar} alt="user image" />
                                            : datas.user.name.charAt(0)
                                    }
                                </li>
                                <li className='flex flex-col gap-1'>
                                    {datas.user.name}
                                    <p className='text-sm opacity-60'>
                                        {datas.lastMsg && datas.lastMsg.sender === loggedUserData._id && "You : "}
                                        {datas.lastMsg && datas.lastMsg.content}
                                    </p>
                                </li>

                                <li className='absolute z-20 top-4 right-4'>
                                    <button
                                        onClick={() => setSelectedUserId(prevId => prevId === datas.user._id ? "" : datas.user._id)}
                                        className='p-2 cursor-pointer hover:bg-[#7f7f874d] rounded-full'>
                                        <PiDotsThreeOutlineVerticalThin className={`transition-transform duration-200 ${selectedUserId === datas.user._id ? "-rotate-90" : "rotate-0"}`} />
                                    </button>
                                </li>

                                {
                                    selectedUserId === datas.user._id && (
                                        <li className={`absolute right-14 top-6 w-[80px] flex flex-col gap-1 z-50`}>
                                            <button onClick={() => handleDeleteChat(datas.user._id)} className='cursor-pointer text-sm text-[#7f7f87] border border-[#7f7f87] hover:border-[#88d4ca] hover:text-[#88d4ca]'>Delete</button>
                                            <button className='cursor-pointer text-sm text-[#7f7f87] border border-[#7f7f87] hover:border-[#88d4ca] hover:text-[#88d4ca]'>Block</button>
                                        </li>
                                    )
                                }
                            </ul>
                        ))
                }
            </section>
        </>
    )
}

export default ConvoList