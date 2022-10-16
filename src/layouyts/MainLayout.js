import {Outlet} from "react-router-dom";

import {Header} from "../pages";
import {Movies} from "../components/Movies/Movies";

function MainLayout() {
    return (
        <div>
            <Header/>
            <h4></h4>
            <Outlet></Outlet>
        </div>
    )
}

export {MainLayout}