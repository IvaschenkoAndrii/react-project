import {Navigate, Route, Routes} from "react-router-dom";
import './App.css';

import {MainLayout} from "./layouyts";
import {MovieDetailedPage, MoviesPage, SearchByGenriePage, SearchResults} from "./pages";
import {NotFoundPage} from "./pages/NotFoundPage";
import {MovieDetailed} from "./components";

function App() {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/movies'}/>}/>
                <Route path={'/search_results'} element={<SearchResults/>}/>
                <Route path={'/movies'} element={<MoviesPage/>}/>
                <Route path={'/search_genrie'} element={<SearchByGenriePage/>}/>

            </Route>
            <Route path={'*'} element={<NotFoundPage/>}/>
            <Route path={'/movies/:id'} element={<MovieDetailed/>}/>
        </Routes>

    );
}

export default App;
