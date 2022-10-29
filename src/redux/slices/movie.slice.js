import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    movie: null,
    movieGenre: [],
    page: null,
    totalPages: null,
    loading: null
}

// const getAllByPages = createAsyncThunk(
//     'movieSlice/getAllByPages',
//     async ({page}, {rejectWithValue}) => {
//         try {
//             const {data} = await movieService.getAllByPages(page);
//             return data;
//         } catch (e) {
//             return rejectWithValue(e.response.data);
//         }
//     }
// );

const getByGenrie = createAsyncThunk(
    'movieSlice/getByGenrie',
    async ({with_genres, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAllByGenrie(with_genres, page);
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
            // .addCase(getAllByPages.fulfilled, (state, action) => {
            //     state.movies = action.payload.results;
            //     state.totalPages = action.payload.total_pages;
            //     state.page = action.payload.page;
            //     state.loading = false;
            // })
            // .addCase(getAllByPages.pending, (state) => {
            //     state.loading = true;
            // })
            .addCase(getMovie.fulfilled, (state, action) => {
                state.movie = action.payload;
            })
            .addCase(getByGenrie.fulfilled, (state, action) => {
                state.movieGenre = action.payload;
                state.totalPages = action.payload.total_pages;
                state.page = action.payload.page;
                state.loading = false;
            })
            .addCase(getByGenrie.pending, (state) => {
                state.loading = true;
            })
});

const {reducer: movieReducer} = movieSlice

const movieActions = {
    // getAllByPages,
    getMovie, getByGenrie
}

export {
    movieActions, movieReducer
}

