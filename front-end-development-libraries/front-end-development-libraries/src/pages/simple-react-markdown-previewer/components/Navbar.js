import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFreeCodeCamp} from "@fortawesome/free-brands-svg-icons/faFreeCodeCamp";

const Navbar = (props) => {
    return (
        <div className="navbar">
            <FontAwesomeIcon icon={faFreeCodeCamp} />
            <header>{props.name}</header>
        </div>
    )
}

export default Navbar;