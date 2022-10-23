import {NavLink} from "react-router-dom";

import css from './movie.module.css'
import {Rating} from "@mui/material";

function Movie({movie}) {



    return (
        <div className={css.card}>
            <NavLink to={`/movies/${movie.id}`}>
                {movie.poster_path?
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}></img>:
                    <img
                        src={`https://as2.ftcdn.net/v2/jpg/04/70/29/97/1000_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg`} alt={movie.title}></img>}
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

export {Movie}