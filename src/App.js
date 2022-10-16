import {Navigate, Route, Routes} from "react-router-dom";
import './App.css';

import {MainLayout} from "./layouyts";
import {MovieDetailed, MoviesPage, SearchResults} from "./pages";

function App() {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/movies'}/>}/>
                <Route path={'/movies'} element={<MoviesPage/>}/>
                <Route path={'/movie_details'} element={<MovieDetailed/>}/>
                <Route path={'/search_results'} element={<SearchResults/>}/>
            </Route>
        </Routes>
    );
}

export default App;
