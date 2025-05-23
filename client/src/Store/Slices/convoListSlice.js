import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { chattings } from '../../Services/api';

// Async thunk to get conversation list
export const fetchConvoList = createAsyncThunk(
    'conversations/getList',
    async () => {
        const response = await chattings.convoList();
        return response;
    }
)

// Async thunk to get selected convo massages
export const fetchMassages = createAsyncThunk(
    'conversations/getMassages',
    async (data) => {
        const response = await chattings.getMassage(data.convoID);
        return response;
    }
)

// Async thunk to send conversation
export const sendMassages = createAsyncThunk(
    'conversations/sendMassage',
    async () => {
        const response = await chattings.sendMassage();
        return response;
    }
)

const convoListSlice = createSlice({
    name: 'conversations',
    initialState: {
        chatList: null,
        selectedConvo: null,
        massage: []
    },
    reducers: {
        selectedChat: (state, action) => {
            state.selectedConvo = action.payload
        },
        newMassage: (state, action) => {
            state.massage.push(action.payload)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchConvoList.fulfilled, (state, action) => {
                state.chatList = action.payload
            })
            .addCase(fetchMassages.fulfilled, (state, action) => {
               state.massage = action.payload
            })
    }
});

export const { selectedChat, newMassage } = convoListSlice.actions
export default convoListSlice.reducer
