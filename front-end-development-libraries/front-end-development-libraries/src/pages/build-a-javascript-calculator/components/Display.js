const Display = (props) => {
    return(
        <div className="calc-display">
            <span className="calc-result">{props.output}</span>
            <span id="display" className="calc-input">{props.input}</span>
        </div>
    )
}

export default Display;