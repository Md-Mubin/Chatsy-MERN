import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {

  const { user } = useSelector((state) => state.loggedUserData)

  const [updateData, setUpdateData] = useState({
    name : "",
    pass : ""
  })

  return (
    <>
      <section className='w-full h-[100dvh]'>
        <ul className='pt-20 pl-30 h-[150px] bg-[#51525766]'>
          <li className='w-[120px] h-[120px] rounded-full bg-[#515257] border-8 border-[#191b1f] flex justify-center items-center text-5xl text-[#88d4ca]'>
            {
              user?.avatar
                ? <img src={user?.avatar} alt={`${user?.name} name`} />
                : user?.name.charAt(0)
            }
          </li>
        </ul>
        <ul className='w-[1100px] m-auto flex flex-col items-start'>
          <li className='text-5xl text-[#88d4ca] mt-5'>{user?.name}</li>

          <li className='text-2xl text-[#515257] mt-32 relative w-full'>
            <input
              type="text"
              onChange={(e)=>setUpdateData((prev)=>({...prev, name : e.target.value}))}
              className='border-b-2 border-[#515257] outline-0 text-[#fff] pl-2' />
            <label className='absolute top-[-50px] left-0'>Full Name</label>
          </li>

          <li className='text-2xl text-[#515257] mt-26 relative w-full'>
            <input
              type="password"
              onChange={(e)=>setUpdateData((prev)=>({...prev, pass : e.target.value}))}
              className='border-b-2 border-[#515257] outline-0 text-[#fff] pl-2' />
            <label className='absolute top-[-50px] left-0'>Password</label>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Profile