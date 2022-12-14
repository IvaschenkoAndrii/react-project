import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {CButton} from '@coreui/react';
import {Rating} from "@mui/material";
import '@coreui/coreui/dist/css/coreui.min.css'

import {movieActions} from "../../redux";
import {GenriesOnMovieDetailed} from "../GenriesOnMovieDetailed/GenriesOnMovieDetailed";
import css from "./MovieDetailed.module.css"


function MovieDetailed() {

    let {id} = useParams();

    const dispatch = useDispatch();

    const {movie} = useSelector(state => state.movieReducer)
    const {themes} = useSelector(state => state.themeReducer);

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(movieActions.getMovie({id}));
    }, [id])


    return (
        <div className={css.wrapcard} id={themes.cardDetail}>
            <div className={css.movie}>

                <div className={css.image}>
                    <img src={`https://image.tmdb.org/t/p/w300${movie?.poster_path}`} alt={movie?.title}></img>
                </div>

                <div className={css.movieDetails}>
                    <h3>{movie?.title}</h3>
                    <div className={css.badge}>
                        {movie?.genres.map(genrie => <GenriesOnMovieDetailed genrie={genrie} key={genrie.id}/>)}
                    </div>
                    <p className={css.overview}>{movie?.overview}</p>
                    <p className={css.release}>Date of release {movie?.release_date}</p>
                    <Rating name="read-only" value={+movie?.vote_average} precision={0.5} max={10} readOnly/>


                </div>
            </div>

            <div className={css.button}>
                <CButton onClick={() => navigate(-1)} color="secondary">Back</CButton>
                <CButton onClick={() => navigate('/movies/')} color="secondary">Main Page</CButton>
            </div>
        </div>

    );
}

export {MovieDetailed}