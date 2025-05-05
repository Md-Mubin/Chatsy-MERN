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
                            arr.push(items.participent)
                        } else if (items.participent._id === loggedUserData._id) {
                            arr.push(items.creator)
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
                            ? <p>No Conversation Found</p>
                            : allChatUser.map((datas) => (
                                <ul key={datas._id} className='flex items-center gap-5 mx-4'>
                                    <li className='w-[50px] h-[50px] rounded-full bg-[#ffffff17] flex justify-center items-center'>
                                        {
                                            datas.avatar 
                                            ? <img src={datas.avatar} alt="" />
                                            : <div>{datas.name.split("")[0]}</div>
                                        }
                                    </li>
                                    <li>
                                        {datas.name}
                                    </li>
                                </ul>
                            ))
                    }
            </section>
        </>
    )
}

export default ConvoList