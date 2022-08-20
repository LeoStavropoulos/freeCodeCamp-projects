const Button = (props) => {
    return(
        <button className={props.class} id={props.id} onClick={() => {props.handleInput(props.symbol)}}>
                {props.symbol}
        </button>
    )
}

export default Button;