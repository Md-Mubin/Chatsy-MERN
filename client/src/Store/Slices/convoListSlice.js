import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { chattings } from '../../Services/api';

// Async thunk to create or get a conversation
export const getConvoList = createAsyncThunk(
    'conversations/getList',
    async () => {
        const response = await chattings.convoList();
        return response; 
    }
);

const convoListSlice = createSlice({
    name: 'conversations',
    initialState: {
        chatList: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getConvoList.pending, (state) => {
                state.loading = true;
            })
            .addCase(getConvoList.fulfilled, (state, action) => {
                state.loading = false;
                state.chatList = action.payload
            })
            .addCase(getConvoList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default convoListSlice.reducer;
