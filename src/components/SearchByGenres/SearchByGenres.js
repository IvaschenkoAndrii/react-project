import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {genrieActions} from "../../redux";
import {GenrieButtons} from "../GenrieButtons/GenrieButtons";

function SearchByGenres (){

    let {genres} = useSelector(state => state.genrieReducer);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(genrieActions.getAll());
    },[])

    let searchString=useRef();

    function searchByGenries() {
        let filtered = genres?.filter(genre => genre.name === searchString.current.innerText);
        console.log(searchString.current.innerText);
        console.log(filtered);
    }


    return (
        <div>
            {genres?.map(genrie=><GenrieButtons genrie={genrie.name} key
            {/*{genres?.map(genrie=><button onClick={searchByGenries} ref={searchString} key={genres?.id}>{genrie.name}</button>)}*/}
        </div>
    );
}

export {SearchByGenres}