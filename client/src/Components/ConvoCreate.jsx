import { useState } from 'react'
import { chattings } from '../Services/api'
import { useDispatch } from 'react-redux'
import { getConvoList } from '../Store/Slices/convoListSlice'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { PiUserCircleMinusLight, PiUserCirclePlusLight } from 'react-icons/pi'

const ConvoCreate = () => {

    // dispatch
    const dispatch = useDispatch()

    // hooks
    const [show, setShow] = useState(false)
    const [addEmail, setAddEmail] = useState("")

    // adding user with email
    const handleAddEmail = async (e) => {
        e.preventDefault()

        try {
            const res = await chattings.createConvo(addEmail)
            
            toast.success(res.msg)
            
            setTimeout(() => {
                dispatch(getConvoList())
            }, 500);

            setAddEmail("")
        } catch (error) {
            toast.error(error.response.data.error)
        }
    }

    return (
        <>
            {/* ============ Toast Container ============ */}
            <ToastContainer
                position="top-right"
                autoClose={800}
                rtl={false}
                theme="dark"
                transition={Bounce}
            />

            {/* ================== Convo Create Part ================== */}
            <section className='border-b-2 border-[#515257]'>
                <ul>
                    <li>
                        <h1 className='font-normal text-5xl text-[#88d4ca]'>Chatsy</h1>
                    </li>

                    <li className='mt-5 text-end text-4xl'>
                        <button onClick={() => setShow(!show)} className='cursor-pointer text-[#515257] hover:text-[#88d4ca] p-2 '>
                            {
                                show ? <PiUserCircleMinusLight /> : <PiUserCirclePlusLight />
                            }
                        </button>
                    </li>

                    <li className={`duration-200 overflow-hidden ${show ? "pt-4 pb-8 opacity-100" : "h-0 opacity-0"}`}>
                        <form onSubmit={handleAddEmail} className='flex items-end gap-4'>
                            <input
                                type="email"
                                placeholder='@email'
                                value={addEmail}
                                onChange={(e) => setAddEmail(e.target.value)}
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