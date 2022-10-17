import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {CButton} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'

import {movieActions} from "../../redux";
import {Genries} from "../Genries/Genries";


function MovieDetailed() {

    let {id} = useParams();

    const dispatch = useDispatch();

    const {movie} = useSelector(state => state.movieReducer)

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(movieActions.getMovie({id}));
    }, [id])


    return (
        <div>

            <div>
                <h3>{movie?.title}</h3>
                <img src={`https://image.tmdb.org/t/p/w300${movie?.poster_path}`}></img>
                <p>{movie?.overview}</p>
                <p>Date of release {movie?.release_date}</p>
            </div>

            <div>
                {movie?.genres.map(genrie => <Genries genrie={genrie} key={genrie.id}/>)}
            </div>

            <div>
                <CButton onClick={() => navigate('/movies/')} color="danger">Main Page</CButton>
            </div>

        </div>
    );
}

export {MovieDetailed}