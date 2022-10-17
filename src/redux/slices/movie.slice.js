import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState={
    movies:[],
    movie: null,
    movieGenre:[],
    page:null,
    totalPages:null
}

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);


const getMovie = createAsyncThunk(
    'movieSlice/getMovie',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovie(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);


const movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results
                state.totalPages=action.payload.total_pages
                state.page=action.payload.page
                state.movieGenres=action.payload.genre_ids
            })
            .addCase(getMovie.fulfilled,(state,action)=>{
                state.movie = action.payload;
            })
});

const {reducer: movieReducer} = movieSlice

const movieActions = {
    getAll, getMovie
}

export {
    movieActions, movieReducer
}

