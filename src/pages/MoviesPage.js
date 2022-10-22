import {Movies} from "../components";
import {Outlet} from "react-router-dom";

function MoviesPage() {
    return (
        <div>
            <Movies/>
        </div>
    )
}

export {MoviesPage}