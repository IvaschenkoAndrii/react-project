import {NavLink} from "react-router-dom";

function GenrieSearchResults ({movie}){
    return (
        <div>
            <NavLink to={`/movies/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}></img>
                <h4>{movie.title}</h4>
            </NavLink>
        </div>


    )
}

export {GenrieSearchResults}