import {useDispatch, useSelector} from "react-redux";

import {themeActions} from "../../redux";
import {faCoffee, faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SwitchTheme() {

    const light = {
        header: 'header_light',
        movies: 'movies_light',
        searchResults: 'searchResults_light',
        main: 'main_light',
        card: 'card_light',
        body: 'body_light',
        details: 'details_light',
        form: 'form_light',
        genres: 'genres_light'
    };

    const dark = {
        header: 'header_dark',
        movies: 'movies_dark',
        searchResults: 'searchResults_dark',
        main: 'main_dark',
        card: 'card_dark',
        body: 'body_dark',
        details: 'details_dark',
        form: 'form_dark',
        genres: 'genres_dark'
    };

    const {themes} = useSelector(state => state.themeReducer);
    const dispatch = useDispatch();


    function switchTheme() {
        themes.header === 'header_light' ?
            dispatch(themeActions.setTheme({...dark})) :
            dispatch(themeActions.setTheme({...light}));
    }

    return (<div>

        <button onClick={switchTheme}>
            {themes.header === 'header_light' ?
                <FontAwesomeIcon icon={faMoon} /> :
                <FontAwesomeIcon icon={faSun} />}
        </button>

        {themes.header === 'header_light' ? <div>Dark</div> : <div>Ligth</div>}

    </div>)
}

export {SwitchTheme}