import {Navigate, Route, Routes} from "react-router-dom";
import './App.css';

import {MainLayout} from "./layouyts";
import {MovieDetailedPage, MoviesPage, SearchByGenriePage, SearchResultsPage} from "./pages";
import {NotFoundPage} from "./pages/NotFoundPage";

function App() {

    return (
        <Routes>

            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/movies'}/>}/>
                <Route path={'/search_results/:searchParams'} element={<SearchResultsPage/>}/>
                <Route path={'/movies'} element={<MoviesPage/>}/>
            </Route>


            <Route path={'/search_genrie'} element={<SearchByGenriePage/>}/>
            <Route path={'/movies/:id'} element={<MovieDetailedPage/>}/>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>

    );
}

export default App;
