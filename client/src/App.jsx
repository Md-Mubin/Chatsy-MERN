import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from './Components/Register'
import Login from './Components/Login'
import AuthLayout from './Layouts/AuthLayout'
import ChatLayout from './Layouts/ChatLayout'
import Chats from './Components/Chats'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>

          <Route path='/chats' element={<ChatLayout />}>
            <Route index element={<Chats />} />
            {/* <Route path="/groups" element={<Chats />} /> */}
            <Route path="/chats/profile" element={<Chats />} />
            <Route path='/chats/setting' element={<Chats />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
