import { useState } from 'react'
import { chattings } from '../Services/api'
import { useDispatch } from 'react-redux'
import { getConvoList } from '../Store/Slices/convoListSlice'

const ConvoCreate = () => {

    const [addEmail, setAddEmail] = useState("")
    const dispatch = useDispatch()

    const handleAddEmail = async (e)=>{
        e.preventDefault()

        const res = await chattings.createConvo(addEmail)
        setTimeout(() => {
            dispatch(getConvoList())
        }, 500);
        
        if(res.msg === "Conversation Created"){
            setAddEmail("")
        }
    }

    return (
        <>
            <section>
                <ul>
                    <li>
                        <h1 className='font-normal text-5xl text-[#88d4ca]'>Chatsy</h1>
                    </li>

                    <li className='mt-5'>
                        <form onSubmit={handleAddEmail} className='flex items-end gap-4'>
                            <input
                                type="email"
                                placeholder='@email'
                                value={addEmail}
                                onChange={(e)=>setAddEmail(e.target.value)}
                                className='w-full py-3 outline-0 border-b-2 border-[#7f7f87] focus-within:border-[#88d4ca] text-[#88d4ca]'
                            />
                            <button className='bg-[#7f7f87] rounded-xl hover:bg-[#88d4ca] active:scale-90 px-6 py-2 text-xl duration-300 cursor-pointer '>Add</button>
                        </form>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default ConvoCreate