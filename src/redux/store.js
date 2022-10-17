import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genrieReducer, movieReducer} from "./slices";

const rootReducer = combineReducers({
    movieReducer, genrieReducer
})

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};