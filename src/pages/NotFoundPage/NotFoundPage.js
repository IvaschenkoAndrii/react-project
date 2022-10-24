import {CButton} from "@coreui/react";
import {useNavigate} from "react-router-dom";

import css from './NotFoundPage.module.css'

function NotFoundPage (){

    const navigate = useNavigate();

    return (
        <div className={css.wrap}>
            <CButton onClick={()=>navigate('./movies')} color="dark" >Main Page</CButton>
            <div className={css.notfound}>
                <h1>Page Not Found</h1>
            </div>
        </div>
    )
}

export {NotFoundPage}