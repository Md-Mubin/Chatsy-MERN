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
                        }else if(items.participent._id === loggedUserData._id){
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
            <section className='w-[400px]'>
                <ul>
                    {
                        allChatUser.length === 0 
                        ? <li>No Conversation Found</li>
                    }
                </ul>
            </section>
        </>
    )
}

export default ConvoList