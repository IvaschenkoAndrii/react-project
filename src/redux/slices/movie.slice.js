import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    movie: null,
    movieGenre: null,
    page: null,
    totalPages: null
}

const getAllByPages = createAsyncThunk(
    'movieSlice/getAllByPages',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAllByPages(page);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({genre_ids}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAllByPages(genre_ids);
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
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAllByPages.fulfilled, (state, action) => {
                state.movies = action.payload.results
                state.totalPages = action.payload.total_pages
                state.page = action.payload.page
            })
            .addCase(getMovie.fulfilled, (state, action) => {
                state.movie = action.payload;
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.movieGenre = action.payload.results;
            })
});

const {reducer: movieReducer} = movieSlice

const movieActions = {
    getAllByPages, getMovie, getAll
}

export {
    movieActions, movieReducer
}

