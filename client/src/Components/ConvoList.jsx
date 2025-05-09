import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getConvoList } from '../Store/Slices/convoListSlice'

const ConvoList = () => {

    // dispatch
    const dispatch = useDispatch()

    // useState
    const [allChatUser, setAllChatUser] = useState([])

    // datas from redux
    const loggedUserData = useSelector((state) => state.loggedUserData.user)
    const allChatLists = useSelector((state) => state.chatListsData.chatList)

    // useEffect
    useEffect(() => {
        dispatch(getConvoList())
    }, [])

    // useEffect
    useEffect(() => {

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

    return (
        <>
            <section className='convoListSec'>
                {
                    allChatUser.length === 0
                        ? <p className='text-center'>No Conversation Found</p>
                        : allChatUser.map((datas) => (
                            <ul key={datas.user._id} className='flex items-center gap-5'>
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
                            </ul>
                        ))
                }
            </section>
        </>
    )
}

export default ConvoList