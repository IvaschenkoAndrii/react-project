import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {accountReducer, genrieReducer, movieReducer, searchReducer, themeReducer} from "./slices";

const rootReducer = combineReducers({
    movieReducer, genrieReducer, accountReducer, searchReducer, themeReducer
})

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};