import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons/faArrowUp";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons/faArrowDown";

const Length = (props) => {
    return(
        <div>
            <h3>{props.title}</h3>
            <div className="time-sets">
                <button className="" onClick={() => props.changeTime(-60, props.type)}>
                    <FontAwesomeIcon icon={faArrowDown}/>
                </button>
                <h3>{props.formatTime(props.time)}</h3>
                <button className="" onClick={() => props.changeTime(60, props.type)}>
                    <FontAwesomeIcon icon={faArrowUp}/>
                </button>
            </div>
        </div>
    )
}

export default Length;