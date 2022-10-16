import {Await, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieActions} from "../../redux";

function MovieDetailed (){

    let {id} = useParams();


    const dispatch = useDispatch();

    const {movie}=useSelector(state => state.movieReducer)




    useEffect(()=>{
        dispatch(movieActions.getMovie({id}));
    },[id])

    console.log(id);
    console.log(movie);

    return (
        <div>
            {/*{movie.title}*/}
            123
        </div>
    )
}

export {MovieDetailed}