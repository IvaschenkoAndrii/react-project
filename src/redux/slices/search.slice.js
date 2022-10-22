import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {searchService} from "../../services/search.service";

const initialState={
    searched:[],
    page: null,
    totalPages: null

}

const getSearchedMovies = createAsyncThunk(
    'searchSlice/getSearchedMovies',
    async ({query,page}, {rejectWithValue}) => {
        try {
            const {data} = await searchService.getSearchedMovies(query,page)
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);



const searchSlice = createSlice({
    name:'searchSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getSearchedMovies.fulfilled, (state, action) => {
                state.searched = action.payload
            })
});

const {reducer: searchReducer} = searchSlice;

const searchActions = {
    getSearchedMovies
}

export {
    searchActions, searchReducer
}

