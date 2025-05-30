import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from './Components/Register'
import Login from './Components/Login'
import AuthLayout from './Layouts/AuthLayout'
import ChatLayout from './Layouts/ChatLayout'
import ForgetPass from './Components/ForgetPass'
import OTP from './Components/OTP'
import NoPage from './Components/NoPage'
import ChatPages from './Pages/ChatPages'
import Profile from './Components/Profile'
import GroupLayout from './Layouts/GroupLayout'
import GroupPage from './Pages/GroupPage'

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
            <Route index element={<ChatPages />} />
          </Route>
          
          <Route path='/group' element={<GroupLayout />}>
            <Route index element={<GroupPage />} />
          </Route>

          <Route path="/profile" element={<Profile />} />

          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
