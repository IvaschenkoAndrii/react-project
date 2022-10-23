import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {CButton} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'

import {Movie} from "../Movie/Movie";
import {movieActions as moviesActions, movieActions, searchActions} from "../../redux";
import css from './Movies.module.css';
import {useForm} from "react-hook-form";


function Movies() {

    const {movies, page, totalPages} = useSelector(state => state.movieReducer);
    const {searched} = useSelector(state => state.searchReducer);
    const {themes} = useSelector(state => state.themeReducer);

    const {handleSubmit, register, reset} = useForm();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getAllByPages({page: query.get('page')}))
    }, [query]);

    useEffect(() => {
        if (!query.get('query')) {
            dispatch(moviesActions.getAllByPages({
                page: query.get('page'),
             }));
        } else {
            dispatch(searchActions.getSearchedMovies({page: query.get('page'), query: query.get('query')}))
        }

    }, [query,page]);


    function backToMain() {
        navigate('/movies')
        window.location.reload();
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


    function setSearch(data) {
        setQuery({query: data.searchString, page: 1})
        reset();
    }

    // console.log(searched.results.length);

    return (
        <div className={css.wrapMovies} id={themes.movies}>

            <form onSubmit={handleSubmit(setSearch)} className={css.searchForm}>
                <input type={"text"} placeholder={"Search movie"}{...register('searchString')}></input>
                <button>Search</button>
            </form>

            {searched.results ?
            <div className={css.cards}>
                {searched.results?.map(movie => <Movie movie={movie} id={movie.id}/>)}
            </div>
            :
            <div className={css.cards}>
                {movies.map(movie => <Movie movie={movie} key={movie.id}/>)}
            </div>}

            <div className={css.buttons}>
                <CButton disabled={page === 1} onClick={prevPage} color="">Back </CButton>
                <CButton onClick={backToMain} color="">Main Page</CButton>
                <CButton disabled={page === totalPages} onClick={nextPage} color=""> Next</CButton>
            </div>

        </div>
    )
}

export {Movies}