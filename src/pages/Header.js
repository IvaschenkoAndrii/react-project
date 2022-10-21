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

    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(accountActions.getAccountDetails());
    },[])


    return (
        <div>
            <div>
                <button onClick={() => navigate('/search_genrie')}>Search by genrie</button>
            </div>

            <div>
                <button onClick={() => navigate('/search_results')}>Search movies</button>
            </div>

            <FontAwesomeIcon icon={faMoon}/>



            <div>
                {account.username}
            </div>
        </div>
    );
}

export {Header}