import React from 'react'
import { Link, useNavigate } from 'react-router'
import { BsChatDots } from "react-icons/bs"
import { AiOutlineLogout } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { PiUserFocus  } from "react-icons/pi";
import { useDispatch } from 'react-redux';

const Navbar = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {

    dispatch(logOutUser())

    localStorage.removeItem("loggedUser")
    localStorage.removeItem("token")
    navigate("/")
  }

  return (
    <>
      <nav className='h-[100dvh] bg-transparent border-r-2 border-[#515257]'>
        <ul className='px-4'>
          <li>
            <Link to={"/chats"} className='group'>
              <BsChatDots className='group-hover:translate-y-[-10px] duration-200' />
            </Link>
          </li>

          <li>
            <Link to={"/chats/setting"} className='group'>
              <IoSettingsOutline  className='group-hover:translate-y-[-10px] duration-200'/>
            </Link>
          </li>

          <li>
            <Link to={"/chats/profile"} className='group'>
            <PiUserFocus  className='group-hover:translate-y-[-10px] duration-200'/>
            </Link>
          </li>

          <li>
            <button onClick={handleLogout} className='group cursor-pointer'>
              <AiOutlineLogout className='group-hover:translate-y-[-10px] duration-200 -rotate-90' />
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar