import React, { useEffect, useState } from 'react'
import { chattings } from '../Services/api'
import { useSelector } from 'react-redux'

const ConvoList = () => {

    // useState
    const [allChatUser, setAllChatUser] = useState([])

    // logged user data from redux
    const loggedUserData = useSelector((state) => state.user)

    // useEffect
    useEffect(() => {
        (
            async () => {
                try {
                    const chatUsers = await chattings.convoList()
                    let arr = []
                    chatUsers.forEach((items) => {
                        if (items.creator._id === loggedUserData._id) {
                            arr.push({
                                user : items.participent,
                                lastMsg : items.lastMsg
                            })
                        } else if (items.participent._id === loggedUserData._id) {
                            arr.push({
                                user : items.creator,
                                lastMsg : items.lastMsg
                            })
                        }
                    });

                    setAllChatUser(arr)
                } catch (error) {
                    console.log(error)
                }
            }
        )()
    }, [])

    return (
        <>
            <section className='convoListSec'>
                    {
                        allChatUser.length === 0
                            ? <p className='text-center'>No Conversation Found</p>
                            : allChatUser.map((datas) => (
                                <ul key={datas.user._id} className='flex items-center gap-5 mx-4'>
                                    <li className='w-[60px] h-[60px] rounded-full bg-[#ffffff17] flex justify-center items-center'>
                                        {
                                            datas.avatar 
                                            ? <img src={datas.user.avatar} alt="user image" />
                                            : datas.user.name.split("")[0]
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