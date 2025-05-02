import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <>
      <nav className='w-[100px] h-[100dvh] bg-transparent border-r-2 border-[#515257]'>
        <ul className='flex flex-col justify-center items-center h-full gap-16'>
          <Link to={"/chats"} className='text-[#60b6aa]'>
            Chats
          </Link>

          <Link to={""}>
            Group
          </Link>

          <Link to={""}>
            Settings
          </Link>

          <Link to={""}>
            Profile
          </Link>
        </ul>
      </nav>
    </>
  )
}

export default Navbar