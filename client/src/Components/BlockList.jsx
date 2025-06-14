import React, { useEffect, useState } from 'react'
import { PiDotsThreeOutlineVerticalThin } from 'react-icons/pi'
import { useDispatch, useSelector } from 'react-redux'
import { blockChat, fetchConvoList, selectedChat } from '../Store/Slices/convoListSlice'

const BlockList = () => {

    // dispatch
    const dispatch = useDispatch()

    // useState hooks
    const [allBlockUser, setAllBlockUser] = useState([])
    const [selectedUserId, setSelectedUserId] = useState("")

    // datas from redux
    const { user } = useSelector((state) => state.authSlice)
    const { chatList, selectedConvo } = useSelector((state) => state.convoListSlice)

    // useEffect
    useEffect(() => {
        dispatch(fetchConvoList())
    }, [])

    useEffect(() => {
        try {
            if (chatList.length > 0) {
                const arr = chatList.filter((items) => (items?.creator?._id === user?._id || items?.participent?._id === user?._id) && items.block === true)
                    .map((items) => ({
                        id: items?._id,
                        user: items?.participent,
                        lastMsg: items?.lastMsg,
                        block: items?.block
                    }))
                setAllBlockUser(arr)
            } else {
                setAllBlockUser([])
            }
        } catch (error) {
            console.log(error)
        }

    }, [chatList])

    // handling selecting chat
    const handleSelectChat = async (selectedDatas) => {
        try {
            if (selectedDatas?.convoID !== selectedConvo?.convoID) {
                dispatch(selectedChat(selectedDatas))
            }
        } catch (error) {
            console.log(error)
        }
    }

    // handling deleting chat user
    const handleDeleteChat = async (deleteChatID) => {

        try {
            dispatch(deleteMassages(deleteChatID))
            setSelectedUserId("")
            if (selectedConvo && selectedConvo?.convoID === deleteChatID) {
                dispatch(selectedChat(null))
            }
        } catch (error) {
            console.log(error)
        }
    }

    // handling block chat user
    const handleUnBlock = async (blockChatID) => {
        try {
            dispatch(blockChat(blockChatID))
            dispatch(selectedChat(null))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <section className='blockListSec mt-20! relative'>
                <p className='text-2xl text-[#88d4ca] italic absolute -top-10 text-center w-full'>Block Lists</p>
                {
                    allBlockUser.length < 1
                        ? <p className='text-center text-[#88d4ca]'>No Conversation Found</p>
                        : allBlockUser.map((datas) => (
                            <ul
                                key={datas?.id}
                                onClick={() => handleSelectChat({ ...datas.user, convoID: datas.id, block: datas.block })}
                                className='flex items-center gap-5 relative z-10'>

                                {/* chat list's img */}
                                <li className='w-[60px] h-[60px] rounded-full bg-[#ffffff17] flex justify-center items-center relative'>
                                    {
                                        datas?.user?.avatar
                                            ? <img src={datas?.user?.avatar} alt="user image" className='w-full h-full rounded-full' />
                                            : datas?.user?.name.charAt(0)
                                    }
                                </li>

                                {/* chat list's name and last msg */}
                                <li className='flex flex-col gap-1'>
                                    {datas?.user?.name}
                                    <p className='text-sm opacity-60 max-w-[200px] truncate'>
                                        {datas?.lastMsg && datas?.lastMsg?.sender === user?._id && "You : "}
                                        {datas?.lastMsg && datas?.lastMsg?.content}
                                    </p>
                                </li>

                                <li className='absolute z-20 top-4 right-4'>
                                    <button
                                        onClick={() => setSelectedUserId(prevId => prevId === datas?.user?._id ? "" : datas?.user?._id)}
                                        className='p-2 cursor-pointer hover:bg-[#7f7f874d] rounded-full'>
                                        <PiDotsThreeOutlineVerticalThin className={`transition-transform duration-200 ${selectedUserId === datas?.user?._id ? "-rotate-90" : "rotate-0"}`} />
                                    </button>
                                </li>

                                {
                                    selectedUserId === datas?.user?._id && (
                                        <li className={`absolute right-14 top-6 w-[80px] flex flex-col gap-1 z-50`}>
                                            <button onClick={() => handleDeleteChat(datas?.id)} className='cursor-pointer text-sm text-[#7f7f87] border border-[#7f7f87] hover:border-[#88d4ca] hover:text-[#88d4ca]'>Delete</button>
                                            <button
                                                onClick={() => handleUnBlock(datas?.id)}
                                                className='cursor-pointer text-sm text-[#7f7f87] border border-[#7f7f87] hover:border-[#88d4ca] hover:text-[#88d4ca]'>
                                                {
                                                    datas?.block === true ? "Un-Block" : "Block"
                                                }
                                            </button>
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

export default BlockList