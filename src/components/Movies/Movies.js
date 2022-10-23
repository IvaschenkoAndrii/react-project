import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {CButton} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'

import {Movie} from "../Movie/Movie";
import {movieActions} from "../../redux";
import css from './Movies.module.css';
import {MovieDetailed} from "../MovieDetailed/MovieDetailed";



function Movies() {

    let {movies, page} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getAllByPages({page: query.get('page')}))
    }, [query]);


    const nextPage = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
        window.scrollTo(0, 0);
    }

    function backToMain() {
        setQuery(value => ({page: 1}))
        window.scrollTo(0, 0);
    }

    function prevPage() {
        setQuery(value => ({page: value.get('page') - 1}))
        window.scrollTo(0, 0);
    }

    console.log(movies);

    return (
        <div>

            <div className={css.cards}>
                {movies.map(movie => <Movie movie={movie} key={movie.id}/>)}
            </div>

            <div className={css.buttons}>
                <CButton disabled={page === 1} onClick={prevPage} color="">Back   </CButton>
                <CButton onClick={backToMain} color="">Main Page</CButton>
                <CButton disabled={page === 500} onClick={nextPage} color="">   Next</CButton>
            </div>

        </div>
    )
}

export {Movies}