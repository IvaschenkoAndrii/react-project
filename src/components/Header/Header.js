import {CButton} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

import {accountActions} from "../../redux";
import css from './Header.module.css';
import {SwitchTheme} from "../index";
import {Link} from "@mui/material";


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
                <CButton onClick={() => navigate('/search_genrie')} color="secondary" variant="outline">Search by genrie</CButton>

                <CButton onClick={backToMain} color="secondary" variant="outline">Main Page</CButton>
            </div>

            <div className={css.switchTheme}>
                <SwitchTheme/>
            </div>

            <div className={css.account}>
                <Link to={'/.movies'}>{account.username}</Link>

            </div>
        </div>
    );
}

export {Header}