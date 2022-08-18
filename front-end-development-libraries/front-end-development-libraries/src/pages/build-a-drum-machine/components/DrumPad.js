import {useEffect} from "react";

const DrumPad = (props) => {

    return(
        <button className="drum-pad" id={props.text} onClick={() => props.playSound(props.text)}>
            {props.text}
            <audio className="clip" id={props.text} src={props.audio}></audio>
        </button>
    )
}

export default DrumPad;