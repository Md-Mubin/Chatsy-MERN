import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { chattings } from '../../Services/api';

// Async thunk to get conversation list
export const fetchConvoList = createAsyncThunk(
    'conversations/getList',
    async () => {
        try {
            const response = await chattings.convoList();
            return response;
        } catch (error) {
            return error
        }
    }
)

// Async thunk to get create conversation 
export const createConvoList = createAsyncThunk(
    'conversations/createConvoList',
    async (participentEmail) => {
        try {
            const response = await chattings.createConvo(participentEmail);
            return response;
        } catch (error) {
            return error
        }
    }
)

// Async thunk to get selected convo massages
export const fetchMassages = createAsyncThunk(
    'conversations/getMassages',
    async (conversationID) => {
        try {
            const response = await chattings.getMassage(conversationID);
            return response;
        } catch (error) {
            return error
        }
    }
)

// Async thunk to send massages
export const sendMassages = createAsyncThunk(
    'conversations/sendMassage',
    async (datas) => {
        try {
            const response = await chattings.sendMassage(datas.reciverID, datas.content, datas.conversationID);
            return response;
        } catch (error) {
            return error
        }
    }
)

// Async thunk to delete massages
export const deleteMassages = createAsyncThunk(
    'conversations/deleteMassage',
    async (deleteConvoID) => {
        try {
            const response = await chattings.deleteConvo(deleteConvoID);
            return response;
        } catch (error) {
            return error
        }
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
            .addCase(createConvoList.fulfilled, (state, action) => {
                console.log(action.payload)
                state.chatList.push(action.payload)
            })
            .addCase(deleteMassages.fulfilled, (state, action) => {
                state.chatList = action.payload
            })
    }
});

export const { selectedChat, newMassage } = convoListSlice.actions
export default convoListSlice.reducer
