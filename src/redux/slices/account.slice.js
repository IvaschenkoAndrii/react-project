import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {accountService} from "../../services";

const initialState={
    account:[]
}

const getAccountDetails = createAsyncThunk(
    'movie/getAccountDetails',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await accountService.getAccountDetails();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);



const accountSlice = createSlice({
    name:'accountSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getAccountDetails.fulfilled, (state, action) => {
                state.account = action.payload
            })
});

const {reducer: accountReducer} = accountSlice;

const accountActions = {
    getAccountDetails
}

export {
    accountReducer, accountActions
}