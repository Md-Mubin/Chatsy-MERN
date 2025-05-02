import React, { useEffect, useState } from 'react'
import { chattings } from '../Services/api'
import { useSelector } from 'react-redux'

const ConvoList = () => {

    const [allChatUser, setAllChatUser] = useState([])
    const loggedUserData = useSelector((state) => state.user)

    // useEffect
    useEffect(() => {
        (
            async () => {
                try {
                    const chatUsers = await chattings.convoList()
                    chatUsers.forEach((items) => {
                        if (items.creator._id === loggedUserData._id) {
                            setAllChatUser(items.participent)
                        }else if(items.participent._id === loggedUserData._id){
                            setAllChatUser(items.creator)
                        }
                    });
                } catch (error) {
                    console.log(error)
                }
            }
        )()
    }, [])

    return (
        <>
            <section className='w-[400px]'>
                <div>{allChatUser.name}</div>
            </section>
        </>
    )
}

export default ConvoList