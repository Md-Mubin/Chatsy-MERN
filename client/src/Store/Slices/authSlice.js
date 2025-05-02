import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem("loggedUser")) || null,
  },
  reducers: {
    loggedUser: (state, action) => {
      state.user = action.payload
    },
    logOutUser:(state,action)=>{
      state.value = action.payload
    }
  },
})

export const { loggedUser, logOutUser } = authSlice.actions

export default authSlice.reducer