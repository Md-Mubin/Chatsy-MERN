import { configureStore } from '@reduxjs/toolkit'
import authSlice from './Slices/authSlice'
import convoListSlice from './Slices/convoListSlice'

export default configureStore({
    reducer: { authSlice, convoListSlice }
})