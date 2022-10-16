import {Await, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieActions} from "../../redux";

function MovieDetailed() {

    let {id} = useParams();

    const dispatch = useDispatch();

    const {movie} = useSelector(state => state.movieReducer)

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(movieActions.getMovie({id}));
    }, [id])

    console.log(movie);

    return (
        <div>
            <h3>{movie?.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w300${movie?.poster_path}`}></img>
            <p>{movie?.overview}</p>
            <p>Date of release {movie?.release_date}</p>
            <p>Gen</p>

            <div>
                <button onClick={()=>navigate('/movies')}>Main Page</button>
            </div>

        </div>
    );}

export {MovieDetailed}