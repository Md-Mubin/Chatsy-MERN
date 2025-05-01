import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='w-[100px] h-[100dvh] bg-transparent border-r-2 border-[#515257]'>
        <ul className='flex flex-col justify-center items-center h-full gap-16'>
          <li className='text-[#60b6aa]'>
            Chats
          </li>

          <li>
            Group
          </li>

          <li>
            Settings
          </li>

          <li>
            Profile
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar