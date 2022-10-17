import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {CButton} from "@coreui/react";

import {genrieActions} from "../../redux";

function SearchByGenres() {

    let {genres} = useSelector(state => state.genrieReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genrieActions.getAll());
    }, [])

    let searchString = useRef();

    function searchByGenries() {
        let filtered = genres?.filter(genrie => genrie.name === searchString.current.innerText);
        console.log(searchString);
        console.log(filtered);
    }


    return (
        <div>
            {genres?.map(genrie => <CButton color="light" onClick={searchByGenries} ref={searchString}
                                            key={genres?.id}>{genrie.name}</CButton>)}

        </div>
    );
}

export {SearchByGenres}