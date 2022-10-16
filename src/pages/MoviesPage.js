import {Movies} from "../components";
import {Outlet} from "react-router-dom";

function MoviesPage() {
    return (
        <div>
            <Movies/>
            <Outlet/>
        </div>
    )
}

export {MoviesPage}