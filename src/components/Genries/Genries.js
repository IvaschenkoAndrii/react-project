import {CBadge} from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css'

function Genries ({genrie}){

    const {name} = genrie;

    return (
        <div>
            <CBadge color="dark">{name}</CBadge>
        </div>
    )
}

export {Genries}