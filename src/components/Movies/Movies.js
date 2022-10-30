import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {CButton} from '@coreui/react';
import {useForm} from "react-hook-form";
import '@coreui/coreui/dist/css/coreui.min.css'
import {Pagination} from '@mui/material'

import {Movie} from "../Movie/Movie";
import {genrieActions, movieActions, searchActions} from "../../redux";
import css from './Movies.module.css';


function Movies() {

    const {movies, movieGenre, page, totalPages, loading} = useSelector(state => state.movieReducer);
    const {genres} = useSelector(state => state.genrieReducer);
    const {searched} = useSelector(state => state.searchReducer);
    const {themes} = useSelector(state => state.themeReducer);

    const {handleSubmit, register, reset} = useForm({defaultValues: {id: 28}});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [query, setQuery] = useSearchParams({page: '1'});


    useEffect(() => {
        if (!query.get('query')) {
            dispatch(movieActions.getByGenrie(
                {with_genres: query.get('with_genres'), page: query.get('page')}))

        } else {
            dispatch(searchActions.getSearchedMovies({page: query.get('page'), query: query.get('query')}))
        }
    }, [query, page]);

    useEffect(() => {
        dispatch(genrieActions.getAllGenries())
    }, [])


    function backToMain() {
        navigate('/movies')
        window.location.reload();
    }


    const prevPage = () => {
        if (query.get('query')) {
            setQuery(value => ({
                query: query.get('query'), page: value.get('page') - 1
            }));
        } else if (query.get('with_genres')) {
            setQuery(value => ({
                with_genres: query.get('with_genres'), page: +value.get('page') - 1
            }));
        } else {
            setQuery(value => ({page: +value.get('page') - 1}));
        }
        window.scrollTo(0, 0);
    };

    const nextPage = () => {
        if (query.get('query')) {
            setQuery(value => ({
                query: query.get('query'), page: +value.get('page') + 1
            }));
        } else if (query.get('with_genres')) {
            setQuery(value => ({
                with_genres: query.get('with_genres'), page: +value.get('page') + 1
            }));
        } else {
            setQuery(value => ({page: +value.get('page') + 1}));
        }
        window.scrollTo(0, 0);
    };


    function setSearch({searchString}) {
        setQuery({query: searchString, page: 1})
        console.log(searchString);
    }


    function SetQueryGenrie(data) {
        setQuery({with_genres: data.id, page: 1})
    }


    return (
        loading ?
            <div className={css.loading}>
                <img src={'https://media.tenor.com/64UaxgnTfx0AAAAC/memes-loading.gif'} alt={'loading'}></img>
            </div> :
            <div>
                <div className={css.searchform} id={themes.searchForm}>

                    <form onChange={handleSubmit(SetQueryGenrie)}>
                        <select {...register('id')}>
                            {genres?.map(genrie => (
                                <option key={genrie.id} value={genrie.id}>{genrie.name}</option>
                            ))}
                        </select>
                    </form>

                    <form onSubmit={handleSubmit(setSearch)}>
                        <input type={"text"} placeholder={"Search movie"}{...register('searchString')}></input>
                        <button>Search</button>
                    </form>
                </div>

                {searched.results ?
                    <div className={css.cards} id={themes.cards}>
                        {searched.results?.map(movie => <Movie movie={movie} id={movie.id}/>)}
                    </div>
                    :
                    <div className={css.cards} id={themes.allCardsGenrie}>
                        {movieGenre.results?.map(movie => <Movie movie={movie} id={movie.id}/>)}
                    </div>}


                <div className={css.buttons} id={themes.buttons}>
                    <CButton disabled={page === 1} onClick={prevPage} color="secondary">Back </CButton>
                    <CButton onClick={backToMain} color="secondary">Main Page</CButton>
                    <CButton disabled={page === totalPages} onClick={nextPage} color="secondary"> Next</CButton>
                </div>


            </div>
    );
}

export {Movies}