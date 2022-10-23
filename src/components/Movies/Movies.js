import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {CButton} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'

import {Movie} from "../Movie/Movie";
import {movieActions} from "../../redux";
import css from './Movies.module.css';
import {SearchResults} from "../SearchResults/SearchResults";


function Movies() {

    let {movies, page, totalPages} = useSelector(state => state.movieReducer);

    const {themes} = useSelector(state => state.themeReducer);


    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getAllByPages({page: query.get('page')}))
    }, [query]);


    function backToMain() {
        setQuery({page: 1})
        window.scrollTo(0, 0);
    }


    const prevPage = () => {
        if (query.get('query')) {
            setQuery(value => ({query: query.get('query'), page: value.get('page') - 1}));
        } else {
            setQuery(value => ({page: value.get('page') - 1}));
        }
        window.scrollTo(0, 0);
    };

    const nextPage = () => {
        if (query.get('query')) {
            setQuery(value => ({query: query.get('query'), page: +value.get('page') + 1}));
        } else {
            setQuery(value => ({page: +value.get('page') + 1}));
        }
        window.scrollTo(0, 0);
    };


    return (
        <div className={css.wrapMovies} id={themes.movies}>

            <SearchResults/>

            <div className={css.cards}>
                {movies.map(movie => <Movie movie={movie} key={movie.id}/>)}
            </div>

            <div className={css.buttons}>
                <CButton disabled={page === 1} onClick={prevPage} color="">Back </CButton>
                <CButton onClick={backToMain} color="">Main Page</CButton>
                <CButton disabled={page === totalPages} onClick={nextPage} color=""> Next</CButton>
            </div>

        </div>
    )
}

export {Movies}