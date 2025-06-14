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
import ProfileLayout from './Layouts/ProfileLayout'
import ProfilePage from './Pages/ProfilePage'
import ResetPass from './Components/ResetPass'
import BlockLayout from './Layouts/BlockLayout'
import BlockPage from './Pages/BlockPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* for auth */}
          <Route path='/' element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/OTP/:email' element={<OTP />} />
            <Route path='/forget_password' element={<ForgetPass />} />
            <Route path='/resetPass/:generatedString' element={<ResetPass/>}/>
          </Route>

          {/* for chats */}
          <Route path='/chats' element={<ChatLayout />}>
            <Route index element={<ChatPages />} />
          </Route>

          {/* for block */}
          <Route path='/blocked' element={<BlockLayout />}>
            <Route index element={<BlockPage />} />
          </Route>

          {/* for profile */}
          <Route path='/profile' element={<ProfileLayout />}>
            <Route index element={<ProfilePage />} />
          </Route>

          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
