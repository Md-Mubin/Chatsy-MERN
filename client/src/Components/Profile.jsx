import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {

  const { user } = useSelector((state) => state.loggedUserData)

  return (
    <>
      <section className='w-full h-[100dvh] flex justify-center items-center'>
        <ul className='py-10 w-[400px] border-2 border-[#515257] text-center'>
          <li className='text-3xl text-[#]'>{user?.name}</li>
        </ul>
      </section>
    </>
  )
}

export default Profile