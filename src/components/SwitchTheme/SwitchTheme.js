import {useDispatch, useSelector} from "react-redux";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect} from "react";

import {themeActions} from "../../redux";
import css from "./SwitchTheme.module.css"


function SwitchTheme() {

    const {themes} = useSelector(state => state.themeReducer);

    const dispatch = useDispatch();

    const light = {
        header: 'header_light',
        movies: 'movies_light',
        searchForm: 'searchForm_light',
        buttons: 'buttons_light',
        card: 'card_light',
        cardDetail: 'cardDetail_light',
        genries: 'genries_light',
        genriesCard: 'genriesCards_light',
        allCardsGenrie: 'allCardsGenrie_light',
        switchTheme:'switchTheme_light',
        cards:'cards_light'
    };

    const dark = {
        header: 'header_dark',
        movies: 'movies_dark',
        searchForm: 'searchForm_dark',
        buttons: 'buttons_dark',
        card: 'card_dark',
        cardDetail: 'cardDetail_dark',
        genries: 'genries_dark',
        genriesCard: 'genriesCards_dark',
        allCardsGenrie: 'allCardsGenrie_dark',
        switchTheme:'switchTheme_dark',
        cards:'cards_dark'
    };


    const key = localStorage.getItem('theme')

    useEffect(() => {
        darkLightMode();
    }, [key])


    function switchLocalStorage() {
        localStorage.getItem('theme') === 'dark' ?
            localStorage.removeItem('theme') :
            localStorage.setItem('theme', 'dark')
        darkLightMode();
    }


    function darkLightMode() {
        localStorage.getItem('theme') === 'dark' ?
            dispatch(themeActions.setTheme({...dark})) :
            dispatch(themeActions.setTheme({...light}))
    }


    return (
        <div className={css.switch} id={themes.switchTheme}>

            <button onClick={switchLocalStorage}>
                {themes.header === 'header_light' ?
                    <FontAwesomeIcon icon={faMoon}/> :
                    <FontAwesomeIcon icon={faSun}/>}
            </button>

            {themes.header === 'header_light' ? <div>Dark</div> : <div>Ligth</div>}

        </div>)
}

export {SwitchTheme}