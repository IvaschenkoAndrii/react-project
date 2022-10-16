import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header (){
    return (
        <div>
            <FontAwesomeIcon icon={faMoon} />
            <form>
                <input type={"text"} placeholder={"Search movie"}></input>
                <button>Search</button>
            </form>
        </div>
    )
}

export {Header}