import React from 'react'
import { useSelector } from 'react-redux'
import { RiArrowUpDoubleLine } from "react-icons/ri";

const Chats = () => {

  const selectedChatDatas = useSelector((state) => state.chatListsData.selectedChat)
  const loggedUserData = useSelector((state) => state.loggedUserData.user)
  // console.log(selectedChatDatas)
  return (
    <>
      {
        selectedChatDatas ?
          <section className='p-4'>

            {/* selected chat's user datas */}
            <ul className='flex items-center gap-4 text-[#88d4ca] border-b-2 border-[#515257] pb-4'>
              <li className='w-[80px] h-[80px] rounded-full bg-[#ffffff17] flex justify-center items-center text-2xl'>
                {
                  selectedChatDatas?.user?.avatar
                    ? <img src={selectedChatDatas?.user?.avatar} alt="user image" />
                    : selectedChatDatas?.user?.name.charAt(0)
                }
              </li>
              <li className='flex flex-col gap-1 text-2xl'>
                {selectedChatDatas?.user.name}
                <p className='opacity-60 text-xl'>
                  {selectedChatDatas?.user?.email}
                </p>
              </li>
            </ul>

            {/* chats */}
            <ul className='h-[80dvh] px-4'>
              {
                selectedChatDatas.res.map((items) => (
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
                className='w-full pl-6 h-[60px] outline-none ring-2 ring-[#515257] rounded-full text-[#fff] text-xl placeholder:italic'/>
                <button className='p-2 text-4xl bg-[#88d4ca] rounded-full cursor-pointer'><RiArrowUpDoubleLine/></button>
              </form>
            </ul>
          </section>
          :
          <section className='flex justify-center items-center h-full'>
            <h3 className='text-4xl text-[#515257]'>Please Select A Chat to Start/Continue Conversation</h3>
          </section>
      }
    </>
  )
}

export default Chats