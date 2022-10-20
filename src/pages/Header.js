import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {accountActions, movieActions, searchActions} from "../redux";
import {SearchResults} from "../components";


function Header (){

    const {account} = useSelector(state => state.accountReducer);

    const {searched} = useSelector(state => state.searchReducer);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {handleSubmit, register, reset} = useForm();

    const [query, setQuery] = useSearchParams({query: ''});


    useEffect(()=>{
        dispatch(accountActions.getAccountDetails());
    },[])


    useEffect((id) => {
        dispatch(searchActions.getSearchedMovies({query: query.get('query'), page: query.get('page')}))
    }, [query])

    console.log(searched);

    function setQueryGenrie(data) {
        console.log(data);
        setQuery(value => ({query: data.searchString,page:1}))
        console.log(data.searchString);
        navigate(`/search_results/${data.searchString}`)
    }

    return (
        <div>
            <div>
                <button onClick={() => navigate('/search_genrie')}>Search by genrie</button>
            </div>

            <FontAwesomeIcon icon={faMoon}/>

            <form onSubmit={handleSubmit(setQueryGenrie)}>
                <input type={"text"} placeholder={"Search movie"}{...register('searchString')}></input>
                <button>Search</button>
            </form>

            <div>
                {account.username}
            </div>


        </div>
    );
}

export {Header}