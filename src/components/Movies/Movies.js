import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {faLeftLong, faRightLong} from "@fortawesome/free-solid-svg-icons";

import {Movie} from "../Movie/Movie";
import {movieActions} from "../../redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
            {movies.map(movie => <Movie movie={movie} key={movie.id}/>)}
            <button disabled={page === 1} onClick={prevPage}><FontAwesomeIcon icon={faLeftLong}/></button>
            <button onClick={backToFirst}>back to page 1</button>
            <button onClick={nextPage}><FontAwesomeIcon icon={faRightLong}/></button>

        </div>
    )
}

export {Movies}