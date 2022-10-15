import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../../redux/slices";
import {Movie} from "../Movie/Movie";

function Movies (){

    const {movies,totalPages,page} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(movieActions.getAll());
    },[])

    console.log(totalPages);
    console.log(page);
    return (
        <div>
            {movies.map(movie=><Movie movie={movie} key={movie.id}/>)}
        </div>
    )
}

export {Movies}