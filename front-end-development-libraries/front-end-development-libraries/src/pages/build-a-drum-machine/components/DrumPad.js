import {useEffect} from "react";

const DrumPad = (props) => {

    useEffect(e => {
        document.addEventListener("keydown", e => playSound(e.key.toUpperCase()))
    }, []);


    const playSound = selector => {
        const audio = document.getElementById(selector).firstElementChild;
        audio.play();
        props.setDisplay(props.name)
    }

    return(
        <button className="drum-pad" id={props.text} onClick={() => playSound(props.text)}>
            {props.text}
            <audio className="clip" id={props.text} src={props.audio}></audio>
        </button>
    )
}

export default DrumPad;