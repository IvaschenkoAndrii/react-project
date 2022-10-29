import {CButton} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Link} from "@mui/material";
import {useEffect} from "react";

import {accountActions} from "../../redux";
import css from './Header.module.css';
import {SwitchTheme} from "../index";


function Header() {

    const {account} = useSelector(state => state.accountReducer);

    const navigate = useNavigate();

    const {themes} = useSelector(state => state.themeReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(accountActions.getAccountDetails());
    }, [])

    function backToMain() {
        navigate('/movies');
        window.location.reload();
    }

    return (
        <div className={css.wrap} id={themes.header}>

            <div className={css.buttons}>
                <CButton onClick={backToMain} color="secondary" variant="outline">Main Page</CButton>
            </div>

            <div className={css.switchTheme}>
                <SwitchTheme/>
            </div>

            <div className={css.account}>
                <img src={'https://image.tmdb.org/t/p/w200'+account?.avatar?.tmdb?.avatar_path} alt={account.username}></img>
                <Link to={'/.movies'}>{account.username}</Link>
            </div>

        </div>
    );
}

export {Header}