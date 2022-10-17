import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genrieService} from "../../services";

const initialState={
    genres:[],
    genrie: null,
}

const getAll = createAsyncThunk(
    'movie/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genrieService.getAll();
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
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload.genres
            })
});

const {reducer: genrieReducer} = genrieSlice

const genrieActions = {
    getAll
}

export {
    genrieActions, genrieReducer
}

