import {MovieDetailed} from "../components";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../redux";

function MovieDetailedPage (){


    return (
        <div>
            <MovieDetailed/>
        </div>
    )
}

export {MovieDetailedPage}