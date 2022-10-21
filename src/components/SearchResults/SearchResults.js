import {useEffect} from "react";
import {searchActions} from "../../redux";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useSearchParams} from "react-router-dom";

function SearchResults (){

    const {searched} = useSelector(state => state.searchReducer);

    const dispatch = useDispatch();

    const {handleSubmit, register, reset} = useForm();

    const [query, setQuery] = useSearchParams({query: ''});

    useEffect((id) => {
        dispatch(searchActions.getSearchedMovies({query: query.get('query'), page: query.get('page')}))
    }, [query])

    console.log(searched);

    function setQueryGenrie(data) {
        console.log(data);
        setQuery(value => ({query: data.searchString,page:1}))
        console.log(data.searchString);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(setQueryGenrie)}>
                <input type={"text"} placeholder={"Search movie"}{...register('searchString')}></input>
                <button>Search</button>
            </form>

        </div>
    );
}

export {SearchResults}