import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { chattings } from '../../Services/api';

// Async thunk to get conversation
export const getConvoList = createAsyncThunk(
    'conversations/getList',
    async () => {
        const response = await chattings.convoList();
        return response;
    }
)

const convoListSlice = createSlice({
    name: 'conversations',
    initialState: {
        chatList: null,
        selectedChat: null
    },
    reducers: {
        selectedChat: (state, action) => {
            state.selectedChat = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getConvoList.fulfilled, (state, action) => {
                state.chatList = action.payload
            })
    }
});

export const { selectedChat } = convoListSlice.actions
export default convoListSlice.reducer
