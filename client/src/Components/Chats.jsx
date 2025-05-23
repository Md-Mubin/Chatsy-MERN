import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RiArrowUpDoubleLine } from "react-icons/ri";
// import { inSocket } from '../Services/socket';
import { fetchMassages, newMassage } from '../Store/Slices/convoListSlice';

const Chats = () => {

  // dispatch
  const dispatch = useDispatch()

  const [sendMsg, setSendMsg] = useState("")
  const { selectedConvo } = useSelector((state) => state.chatListsData)
  const loggedUserData = useSelector((state) => state.loggedUserData.user)
  const selectedConvoMassages = useSelector((state) => state.chatListsData.massage)

  // const handleSendMassage = async (e) => {
  //   e.preventDefault()
  //   dispatch(newMassage({reciverID : selectedChatDatas.user._id, content: send, conversationID: selectedChatDatas.convoID}))
  // }
  useEffect(() => {
    dispatch(fetchMassages())
  }, [])

  console.log(selectedConvo)
  // useEffect(() => {
  //   inSocket()
  // }, [selectedChatDatas])

  return (
    <>
      <section className='p-4'>

        {/* selected chat's user datas */}
        {
          selectedConvo && (
            <ul className='flex items-center gap-4 text-[#88d4ca] border-b-2 border-[#515257] pb-4'>
              <li className='w-[80px] h-[80px] rounded-full bg-[#ffffff17] flex justify-center items-center text-2xl'>
                {
                  selectedConvo?.avatar
                    ? <img src={selectedConvo?.avatar} alt="user image" />
                    : selectedConvo?.name.charAt(0)
                }
              </li>
              <li className='flex flex-col gap-1 text-2xl'>
                {selectedConvo?.name}
                <p className='opacity-60 text-xl'>
                  {selectedConvo?.email}
                </p>
              </li>
            </ul>
          )
        }

        {/* chats */}
        <ul className='h-[80dvh] px-4'>
          {
            selectedConvoMassages.map((items) => (console.log(items),
              <li key={items._id} className={`py-2 w-full flex justify-end ${items.reciver === loggedUserData._id && "justify-start"}`}>
                <span className={`px-6 py-4 rounded-2xl text-lg 
                      ${items.reciver === loggedUserData._id
                    ? "ring-transparent bg-[#88d4ca] text-[#000]"
                    : "ring-2 ring-[#88d4ca] text-[#88d4ca] "}`}>
                  {items.content}
                </span>
              </li>
            ))
          }
        </ul>

        {/* massage send input */}
        <ul className='w-full px-4'>
          <form className='flex items-center gap-6 min-h-[5dvh]'>
            <input
              type="text"
              placeholder='Write Something'
              onChange={(e) => setSendMsg(e.target.value)}
              className='w-full pl-6 h-[60px] outline-none ring-2 ring-[#515257] rounded-full text-[#fff] text-xl placeholder:italic' />
            <button className='p-2 text-4xl ring-3 text-[#88d4ca] ring-[#88d4ca] hover:bg-[#88d4ca] hover:ring-0 hover:text-[#000] duration-200 rounded-full cursor-pointer'><RiArrowUpDoubleLine /></button>
          </form>
        </ul>
      </section>
    </>
  )
}

export default Chats