import "./DrumMachine.css"
import {faFreeCodeCamp} from "@fortawesome/free-brands-svg-icons/faFreeCodeCamp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useState} from "react";
import Switch from "./components/Switch";
import Display from "./components/Display";
import Slider from "./components/Slider";
import DrumPad from "./components/DrumPad";
import bankOne from "./banks/bankOne";

const DrumMachine = () => {
    const [display, setDisplay] = useState("");
    const [soundBank, setSoundBank] = useState(bankOne);
    const [powerOn, setPowerOn] = useState(true);
    const [volume, setVolume] = useState(30);

    useEffect(e => {
        document.addEventListener("keydown", e => playSound(e.key.toUpperCase()))
    }, []);

    const playSound = selector => {
        const audio = document.getElementById(selector).firstElementChild;
        audio.play();
        soundBank.forEach(element => {
            if (element.keyTrigger === selector) {
                setDisplay(element.id);
            }
        })
    }

    return (
        <div className="drum-machine-container">
            <div id="drum-machine" className="drum-machine">
                <header>
                    FCC <FontAwesomeIcon icon={faFreeCodeCamp}/>
                </header>
                <div className="drum-machine-inner-container">
                    <div className="drum-pad-grid">
                        {soundBank.map(pad => <DrumPad key={pad.keyCode} text={pad.keyTrigger} audio={pad.url} setDisplay={setDisplay} name={pad.id} playSound={playSound}/>)}
                    </div>
                    <div className="controls">
                        <Switch name="Power"/>
                        <Display text={display}/>
                        <Slider />
                        <Switch name="Bank"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DrumMachine;