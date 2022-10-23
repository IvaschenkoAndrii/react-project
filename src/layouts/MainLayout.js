import {useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import {Header} from "../pages";

function MainLayout() {

    const {themes} = useSelector(state => state.themeReducer);



    return (
        <div id={themes.body}>
            <Header/>
            <Outlet/>
        </div>
    )
}

export {MainLayout}