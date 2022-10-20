import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genrieService} from "../../services";

const initialState={
    genres:[],
    genrie: null,
}

const getAllGenries = createAsyncThunk(
    'genrieSlice/getAllGenries',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genrieService.getAllGenries();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);



const genrieSlice = createSlice({
    name:'genrieSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getAllGenries.fulfilled, (state, action) => {
                state.genres = action.payload.genres
            })
});

const {reducer: genrieReducer} = genrieSlice

const genrieActions = {
    getAllGenries
}

export {
    genrieActions, genrieReducer
}

