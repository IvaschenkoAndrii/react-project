import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {accountReducer, genrieReducer, movieReducer, searchReducer} from "./slices";

const rootReducer = combineReducers({
    movieReducer, genrieReducer, accountReducer, searchReducer
})

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};