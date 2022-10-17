import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {CButton} from "@coreui/react";

import {genrieActions} from "../../redux";
import css from './SerchByGenres.module.css'

function SearchByGenres() {

    const {genres} = useSelector(state => state.genrieReducer);
    const {movieGenre} = useSelector(state => state.movieReducer)


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genrieActions.getAll());
    }, [])



    function search(id) {
        let filtered = genres?.filter(genrie => genrie.id === id);
        console.log(filtered);
    }




    return (
        <div>
            {genres.map(genrie => <CButton onClick={()=>search(genrie.id)} className={css.CButton} value={genrie.id}
                                           color="light" key={genrie.id}>{genrie.name}</CButton>)}
        </div>

    );
}

export {SearchByGenres}