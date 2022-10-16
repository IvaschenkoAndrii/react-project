import {Outlet} from "react-router-dom";

import {Header} from "../pages";

function MainLayout() {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

export {MainLayout}