import "./DrumMachine.css"
import {faFreeCodeCamp} from "@fortawesome/free-brands-svg-icons/faFreeCodeCamp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const DrumMachine = () => {
    return (
        <div className="drum-machine-container">
            <div className="drum-machine">
                <header>
                    FCC <FontAwesomeIcon icon={faFreeCodeCamp}/>
                </header>
            </div>
        </div>
    )
}

export default DrumMachine;