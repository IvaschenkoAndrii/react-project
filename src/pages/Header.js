import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom";

function Header (){

    const navigate = useNavigate();

    return (
        <div>
            <div>
                <button onClick={()=>navigate('/search_genrie')}>Search by genrie</button>
            </div>
            <FontAwesomeIcon icon={faMoon} />
            <form>
                <input type={"text"} placeholder={"Search movie"}></input>
                <button>Search</button>
            </form>
        </div>
    )
}

export {Header}