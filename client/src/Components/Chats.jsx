import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RiArrowUpDoubleLine } from "react-icons/ri"
import { fetchMassages, sendMassages } from '../Store/Slices/convoListSlice'

const Chats = () => {
  // ref
  const chatContainer = useRef(null)

  // dispatch
  const dispatch = useDispatch()

  // all hooks
  const [sendMsg, setSendMsg] = useState("")
  const { selectedConvo, massage } = useSelector((state) => state.convoListSlice)
  const { user } = useSelector((state) => state.authSlice)

  // use effect
  useEffect(() => {
    if (selectedConvo?.convoID) {
      dispatch(fetchMassages(selectedConvo.convoID))
    }
  }, [selectedConvo, massage.length])

  // sending massage handler
  const handleSendMassage = async (e) => {
    e.preventDefault()
    setSendMsg("")
    dispatch(sendMassages({ reciverID: selectedConvo._id, content: sendMsg, conversationID: selectedConvo.convoID }))
  }

  useEffect(() => {
    if (chatContainer.current) {
      chatContainer.current.scrollTop = chatContainer.current.scrollHeight
    }
  }, [massage.length])

  return (
    <>
      <section className='p-4 tracking-widest'>

        {/* selected chat's user datas */}
        {
          selectedConvo && (
            <ul className='flex items-center gap-4 text-[#88d4ca] border-b-2 border-[#515257] pb-4'>
              <li className='w-[80px] h-[80px] rounded-full bg-[#ffffff17] flex justify-center items-center text-2xl overflow-hidden'>
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
        <ul ref={chatContainer} className='h-[80dvh] px-4 pb-8 overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#515257]'>
          {
            massage && massage.length > 0
              ?
              massage.map((items) => (
                <li key={items?._id} className={`py-2 w-full`}>
                  <div className={`max-w-[300px] w-fit px-5 py-3 rounded-lg text-lg flex flex-col gap-1 break-words 
                      ${items.reciver === user._id
                      ? "ring-transparent bg-[#88d4ca] text-[#000] rounded-bl-none mr-auto"
                      : "ring-2 ring-[#88d4ca] text-[#88d4ca] rounded-br-none ml-auto"}`}>
                    {items.content}
                    <span className={`text-[12px] ${items.reciver === user._id ? "mr-auto" : "ml-auto"}`}>
                      {new Date(items.createdAt).toLocaleString()}
                    </span>
                  </div>
                </li>
              ))
              :
              <li className='text-center pt-[300px] text-[#88d4ca] text-3xl italic'>No massage found. <br />Start Conversation by sending massage first.</li>
          }
        </ul>

        {/* massage send input */}
        <ul className='w-full px-4'>
          <form onSubmit={handleSendMassage} className='flex items-center gap-6 min-h-[5dvh]'>
            <input
              type="text"
              value={sendMsg}
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