import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {CButton} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'

import {Movie} from "../Movie/Movie";
import {movieActions} from "../../redux";
import css from './Movies.module.css';


function Movies() {

    let {movies, totalPages, page} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getAll({page: query.get('page')}))
    }, [query]);


    const nextPage = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
    }


    function backToFirst() {
        setQuery(value => ({page: 1}))
    }


    function prevPage() {
        setQuery(value => ({page: value.get('page') - 1}))
    }

    return (
        <div>

                <div>
                    <CButton disabled={page === 1} onClick={prevPage} color="danger">Back   </CButton>
                    <CButton onClick={backToFirst} color="danger">Main Page</CButton>
                    <CButton onClick={nextPage} color="danger">   Next</CButton>
                </div>


            <div className={css.cards}>
                {movies.map(movie => <Movie movie={movie} key={movie.id}/>)}
            </div>

        </div>
    )
}

export {Movies}