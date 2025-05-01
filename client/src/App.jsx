import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from './Components/Register'
import Login from './Components/Login'
import AuthLayout from './Layouts/AuthLayout'
import ChatLayout from './Layouts/ChatLayout'
import Chats from './Components/Chats'
import ForgetPass from './Components/ForgetPass'
import OTP from './Components/OTP'
import NoPage from './Components/NoPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/OTP/:email' element={<OTP />} />
            <Route path='/forget_password' element={<ForgetPass />} />
          </Route>

          <Route path='/chats' element={<ChatLayout />}>
            <Route index element={<Chats />} />
            <Route path="/chats/profile" element={<Chats />} />
            <Route path='/chats/setting' element={<Chats />} />
          </Route>
          
          <Route path='*' element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
