import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {CButton} from "@coreui/react";
import {useNavigate, useSearchParams} from "react-router-dom";

import {genrieActions, movieActions} from "../../../redux";
import {GenrieSearchResults} from "../GenrieSearchResults/GenrieSearchResults";
import css from './SerchByGenres.module.css'

function SearchByGenres() {

    const {genres} = useSelector(state => state.genrieReducer);
    const {movieGenre,loading} = useSelector(state => state.movieReducer)
    const {themes} = useSelector(state => state.themeReducer);

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
        setQuery({with_genres: id, page: 1})
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
        navigate('/movies');
        window.location.reload();
    }

    return (
        loading?
            <div className={css.loading}>
                <img src={'https://media.tenor.com/64UaxgnTfx0AAAAC/memes-loading.gif'} alt={'loading'}></img>
            </div>:
        <div className={css.wrap} id={themes.genries}>
            <div>
                {genres.map(genrie => <CButton onClick={() => setQueryGenrie(genrie.id)} className={css.CButton}
                                               value={genrie.id} color="light" key={genrie.id}>{genrie.name}</CButton>)}
            </div>

            <div className={css.cards} id={themes.allCardsGenrie}>
                {movieGenre.results?.map(movie => <GenrieSearchResults movie={movie} key={movie.id}/>)}
            </div>


            <div className={css.buttons}>
                <CButton disabled={movieGenre.page === 1} onClick={prevPage} color="secondary">Back </CButton>
                <CButton onClick={backToMain} color="secondary">Main Page</CButton>
                <CButton disabled={movieGenre.page === movieGenre.totalPages} onClick={nextPage}
                         color="secondary"> Next</CButton>
            </div>
        </div>

    );
}

export {SearchByGenres}