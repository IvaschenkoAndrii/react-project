import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {CButton} from "@coreui/react";

import {genrieActions} from "../../redux";
import css from './SerchByGenres.module.css'

function SearchByGenres() {

    let {genres} = useSelector(state => state.genrieReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genrieActions.getAll());
    }, [])

    let searchString = useRef();

    function search() {
        let filtered = genres?.filter(genrie => genrie.name === CButton.current.innerText);
        console.log(searchString);
        console.log(filtered[0].name);
    }



    return (
        <div>
            {genres.map(genrie => <CButton onClick={search} className={css.CButton} value={genrie.id} color="light"
                                           key={genrie.id}>{genrie.name}</CButton>)}
        </div>

          );
}

export {SearchByGenres}