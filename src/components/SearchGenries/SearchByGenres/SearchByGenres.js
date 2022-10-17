import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {CButton} from "@coreui/react";

import {genrieActions, movieActions} from "../../../redux";
import css from './SerchByGenres.module.css'

function SearchByGenres() {

    const {genres} = useSelector(state => state.genrieReducer);
    const {movieGenre} = useSelector(state => state.movieReducer)


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genrieActions.getAll())
    }, [])

    useEffect((id) => {
        dispatch(movieActions.getAll({genres_ids: id}))
    }, [])






    // for (const genre of movieGenre) {
    //     console.log(genre);
    //     for (let i = 0; i < genre.length; i++) {
    //         console.log(genre_ids[i]);
    //     }
    // }


    // function search(id) {
    //     // let filtered = movieGenre.filter(genrie => genrie.id === genre_ids);
    //     // console.log(filtered);
    //     let filtered = movieGenre?.map(genrie => genrie.genre_ids.filter(value => value === id));
    //     console.log(filtered);
    // }


    return (
        <div>
           <div>
               {genres.map(genrie => <CButton onClick={() => search(genrie.id)} className={css.CButton} value={genrie.id}
                                               color="light" key={genrie.id}>{genrie.name}</CButton>)}
           </div>
            <div>

            </div>
        </div>

    );
}

export {SearchByGenres}