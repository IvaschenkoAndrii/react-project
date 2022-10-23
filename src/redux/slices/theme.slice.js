import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    themes: {
        header: 'header_light',
        movies: 'movies_light',
        searchForm: 'searchForm_light',
        buttons: 'buttons_light',
        card: 'card_light',
        cardDetail:'cardDetail_light'
    }
};

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.themes = action.payload;
        }
    }
});

const {reducer: themeReducer, actions: {setTheme}} = themeSlice;

const themeActions = {
    setTheme
};

export {
    themeReducer,
    themeActions
};