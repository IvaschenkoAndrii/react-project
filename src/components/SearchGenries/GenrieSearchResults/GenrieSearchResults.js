import {NavLink} from "react-router-dom";
import {Rating} from "@mui/material";

import css from "../../Movie/movie.module.css";

function GenrieSearchResults ({movie}){
    return (
        <div className={css.card}>
            <NavLink to={`/movies/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}></img>
            </NavLink>

            <h4 className={css.title}>{movie.title}</h4>

            <h4 className={css.rating}>Rating {movie.vote_average}</h4>
            <h4 className={css.rating}>Date of Release {movie.release_date}</h4>

            <div className={css.stars}>
                <Rating name="read-only" value={+movie?.vote_average} precision={0.5} size="small" max={10} readOnly />
            </div>
        </div>

    )
}

export {GenrieSearchResults}