const Editor = (props) => {
    return(
        <div className="editor-container">
            <textarea id="editor" value={props.markdown} onChange={e => props.setMarkdown(e.target.value)}/>
        </div>
    )
}

export default Editor;