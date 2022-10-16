import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieActions} from "../../redux";

function MovieDetailed (){

    let {id} = useParams();


    const dispatch = useDispatch();

    const {movie}=useSelector(state => state.movieReducer)

    console.log(id);
    console.log(movie);


    useEffect(()=>{
        dispatch(movieActions.getMovie({id}));
    },[id])

    return (
        <div>
            xdfgdfgs
        </div>
    )
}

export {MovieDetailed}