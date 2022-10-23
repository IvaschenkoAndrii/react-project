import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useNavigate, useSearchParams} from "react-router-dom";
import {CButton} from "@coreui/react";

import {searchActions} from "../../redux";
import {SearchResultMoviesList} from "../SearchResultMoviesList/SearchResultMoviesList";
import css from "./SearchResults.module.css"

function SearchResults() {

    const {searched} = useSelector(state => state.searchReducer);

    const {themes} = useSelector(state => state.themeReducer);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {handleSubmit, register, reset} = useForm();

    const [query1, setQuery] = useSearchParams({query: ''});

    useEffect(() => {
        dispatch(searchActions.getSearchedMovies({query: query1.get('query'), page: query1.get('page')}))
    }, [query1])


    function setQueryGenrie(data) {
        setQuery({query: data.searchString, page: 1})
        reset();
    }


    // const nextPage = () => {
    //     setQuery(value => ({query: value.get('query'), page: +value.get('page') + 1}));
    //     window.scrollTo(0, 0);
    // }
    //
    //
    // function prevPage() {
    //     setQuery(value => ({query: value.get('query'), page: value.get('page') - 1}));
    //     window.scrollTo(0, 0);
    // }
    //
    // function backToMain() {
    //     navigate('/movies')
    // }

    return (
        <div id={themes.searchResults}>
            <form onSubmit={handleSubmit(setQueryGenrie)}>
                <input type={"text"} placeholder={"Search movie"}{...register('searchString')}></input>
                <button>Search</button>
            </form>


            <div className={css.cards}>
                {searched.results?.map(movie => <SearchResultMoviesList movie={movie} id={movie.id}/>)}
            </div>


            {/*<div className={css.buttons}>*/}
            {/*    <CButton disabled={searched?.page === 1} onClick={prevPage} color="">Back </CButton>*/}
            {/*    <CButton onClick={backToMain} color="">Main Page</CButton>*/}
            {/*    <CButton onClick={nextPage} color=""> Next</CButton>*/}
            {/*</div>*/}


        </div>
    );
}

export {SearchResults}