import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import "./MarkdownPreviewer.css"
import {useState} from "react";
import placeholder from "./placeholder";
import {marked} from "marked";

const MarkdownPreviewer = () => {
    const [markdown, setMarkdown] = useState(placeholder);

    marked.setOptions({
        breaks: true
    })

    return(
        <div className="markdown-previewer">
            <Editor markdown={markdown} setMarkdown={setMarkdown}/>
            <Previewer text={marked.parse(markdown)}/>
        </div>
    )
}

export default MarkdownPreviewer;