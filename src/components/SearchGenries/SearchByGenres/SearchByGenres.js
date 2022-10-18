import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {CButton} from "@coreui/react";

import {genrieActions, movieActions} from "../../../redux";
import css from './SerchByGenres.module.css'
import {useSearchParams} from "react-router-dom";

function SearchByGenres() {

    const {genres} = useSelector(state => state.genrieReducer);
    const {movieGenre} = useSelector(state => state.movieReducer)

    const [query, setQuery] = useSearchParams({with_genres: ''});


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genrieActions.getAll())
    }, [])

    useEffect((id) => {
        dispatch(movieActions.getByGenrie({with_genres: query.get('with_genres'), page: query.get('page')}))
    }, [query])


    function setQueryGenrie(id) {
        setQuery(value => ({with_genres: id,page:1}))
    }


    const nextPage = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
    }


    function prevPage() {
        setQuery(value => ({page: value.get('page') - 1}))
    }


    console.log(movieGenre);

    return (
        <div>
            <div>
                {genres.map(genrie => <CButton onClick={()=>setQueryGenrie(genrie.id)} className={css.CButton}
                                               value={genrie.id} color="light" key={genrie.id}>{genrie.name}</CButton>)}
            </div>
            <div>
                <CButton disabled={movieGenre.page === 1} onClick={prevPage} color="">Back   </CButton>
                <CButton disabled={movieGenre.page === 500} onClick={nextPage} color="">   Next</CButton>
            </div>
        </div>

    );
}

export {SearchByGenres}