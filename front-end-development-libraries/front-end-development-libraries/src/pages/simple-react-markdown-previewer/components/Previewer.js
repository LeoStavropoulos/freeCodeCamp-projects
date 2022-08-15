const Previewer = (props) => {
    return (
        <div id="preview"
             className="output-text"
             dangerouslySetInnerHTML={{__html: props.text}}
        ></div>
    )
}

export default Previewer;