import {NavLink} from "react-router-dom";
import {Rating} from "@mui/material";
import {useSelector} from "react-redux";

import css from './Movie.module.css';

function Movie({movie}) {

    const {themes} = useSelector(state => state.themeReducer);

    return (
        <div className={css.card} id={themes.card}>
            <NavLink to={`/movies/${movie.id}`}>
                {movie.poster_path?
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}></img>:
                    <img src={`https://as2.ftcdn.net/v2/jpg/04/70/29/97/1000_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg`} alt={movie.title}></img>}


            <h4 className={css.title}>{movie.title}</h4>

            <h4 className={css.rating}>Rating {movie.vote_average}</h4>
            <h4 className={css.rating}>Date of Release {movie.release_date}</h4>

            <div className={css.stars}>
                <Rating name="read-only" value={+movie?.vote_average} precision={0.5} size="small" max={10} readOnly />
            </div>
            </NavLink>
        </div>

    )
}

export {Movie}