import {Outlet} from "react-router-dom";

import {Header} from "../pages";

function MainLayout() {
    return (
        <div>
            <Header/>
            <h4></h4>
            <Outlet/>
        </div>
    )
}

export {MainLayout}