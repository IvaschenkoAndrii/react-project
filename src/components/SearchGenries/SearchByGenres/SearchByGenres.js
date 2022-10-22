import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {CButton} from "@coreui/react";
import {useNavigate, useSearchParams} from "react-router-dom";

import {genrieActions, movieActions} from "../../../redux";
import css from './SerchByGenres.module.css'
import {GenrieSearchResults} from "../GenrieSearchResults/GenrieSearchResults";

function SearchByGenres() {

    const {genres} = useSelector(state => state.genrieReducer);

    const {movieGenre} = useSelector(state => state.movieReducer)

    const [query, setQuery] = useSearchParams({with_genres: ''});

    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genrieActions.getAllGenries())
    }, [])

    useEffect(() => {
        dispatch(movieActions.getByGenrie({with_genres: query.get('with_genres'), page: query.get('page')}))
    }, [query])


    function setQueryGenrie(id) {
        setQuery(value => ({with_genres: id, page: 1}))
    }


    const nextPage = () => {
        setQuery(value => ({with_genres: query.get('with_genres'), page: +value.get('page') + 1}));
        window.scrollTo(0, 0);
    }


    function prevPage() {
        setQuery(value => ({with_genres: query.get('with_genres'), page: value.get('page') - 1}));
        window.scrollTo(0, 0);
    }


    function backToMain() {
        navigate('/movies')
    }

    return (
        <div>
            <div>
                {genres.map(genrie => <CButton onClick={() => setQueryGenrie(genrie.id)} className={css.CButton}
                                               value={genrie.id} color="light" key={genrie.id}>{genrie.name}</CButton>)}
            </div>

            <hr/>

            <div className={css.cards}>
                {movieGenre.results?.map(movie => <GenrieSearchResults movie={movie} key={movie.id}/>)}
            </div>

            <hr/>

            <div className={css.buttons}>
                <CButton disabled={movieGenre.page === 1} onClick={prevPage} color="">Back </CButton>
                <CButton onClick={backToMain} color="">Main Page</CButton>
                <CButton disabled={movieGenre.page === movieGenre.totalPages} onClick={nextPage}
                         color=""> Next</CButton>
            </div>
        </div>

    );
}

export {SearchByGenres}