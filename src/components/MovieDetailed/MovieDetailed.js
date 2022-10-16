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
            <h4>{movie.title}</h4>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}></img>
        </div>
    )
}

export {MovieDetailed}