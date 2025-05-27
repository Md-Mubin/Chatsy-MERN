import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CiEdit } from "react-icons/ci";
import { updatingUserData } from '../Store/Slices/authSlice';

const Profile = () => {

  // dispatch 
  const dispatch = useDispatch()

  // getting data from redux
  const { user } = useSelector((state) => state.loggedUserData)

  // all hooks
  const [editOn, setEditOn] = useState(false)
  const [updateData, setUpdateData] = useState({
    name: user?.name,
    pass: ""
  })

  // handeling update data
  const handleSaveUpdate = () => { 
    dispatch(updatingUserData(updateData))
    setEditOn(!editOn)
  }

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

        <ul className='relative w-[1100px] m-auto pl-64 flex flex-col items-start'>
          <li className='text-5xl text-[#88d4ca] mt-5'>{user?.name}</li>

          {
            !editOn &&
            <li>
              <button
                onClick={() => setEditOn(!editOn)}
                className='px-6 py-2 absolute top-10 lg:right-[30%] cursor-pointer text-4xl text-[#b9b9b9] hover:text-[#88d4ca]'>
                <CiEdit />
              </button>
            </li>
          }

          {
            editOn &&
            (
              <li>
                {/* edit and update name */}
                <div className='text-2xl text-[#515257] mt-32 relative w-full'>
                  <input
                    type="text"
                    value={editOn ? updateData?.name : user?.name}
                    onChange={(e) => setUpdateData((prev) => ({ ...prev, name: e.target.value }))}
                    className='border-b-2 border-[#515257] outline-0 text-[#fff] pl-2' />
                  <label className='absolute top-[-50px] left-0 text-[#6b6b6b]'>Full Name</label>
                </div>

                {/* edit and update password */}
                <div className='text-2xl text-[#515257] mt-26 relative w-full'>
                  <input
                    type="password"
                    onChange={(e) => setUpdateData((prev) => ({ ...prev, pass: e.target.value }))}
                    className='border-b-2 border-[#515257] outline-0 text-[#fff] pl-2' />
                  <label className='absolute top-[-50px] left-0 text-[#6b6b6b]'>Password</label>
                </div>

                {/* save and cancel button */}
                <div className='flex gap-10 items-center mt-30'>
                  <button onClick={handleSaveUpdate} className='px-8 py-2 bg-[#515257] text-2xl hover:bg-green-600 hover:text-[#fff] cursor-pointer duration-200 rounded-lg hover:rounded-none hover:translate-y-[-4px]'>Save</button>
                  <button onClick={() => setEditOn(false)} className='px-8 py-2 bg-[#515257] text-2xl hover:bg-red-600 hover:text-[#fff] cursor-pointer duration-200 rounded-lg hover:rounded-none hover:translate-y-[-4px]'>Cancel</button>
                </div>
              </li>
            )
          }
        </ul>
      </section>
    </>
  )
}

export default Profile