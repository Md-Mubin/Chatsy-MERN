import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { authoraizations } from '../../Services/api';

// Async thunk to delete massages
export const updatingUserData = createAsyncThunk(
  'auth/update',
  async (updateData) => {
    try {
      const {name, pass, avatar} = updateData
      const response = await authoraizations.updateData(name, pass, avatar)
      return response;
    } catch (error) {
      return error
    }
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem("loggedUser")) || null,
  },
  reducers: {
    loggedUser: (state, action) => {
      state.user = action.payload
    },
    logOutUser: (state) => {
      state.user = null
      localStorage.removeItem("loggedUser")
      localStorage.removeItem("token")
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(updatingUserData.fulfilled, (state, action) => {
        state.chatList = action.payload
        localStorage.setItem("loggedUser", JSON.stringify(action.payload))
      })
  }
})

export const { loggedUser, logOutUser } = authSlice.actions

export default authSlice.reducer