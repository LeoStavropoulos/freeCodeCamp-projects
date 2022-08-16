import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import "./MarkdownPreviewer.css"
import {useState} from "react";
import placeholder from "./placeholder";
import {marked} from "marked";
import Navbar from "./components/Navbar";

const MarkdownPreviewer = () => {
    const [markdown, setMarkdown] = useState(placeholder);

    marked.setOptions({
        breaks: true
    })

    return(
        <div className="markdown-previewer">
            <div className="window">
                <Navbar name="Editor"/>
                <Editor markdown={markdown} setMarkdown={setMarkdown}/>
            </div>
            <div className="window">
                <Navbar name="Previewer"/>
                <Previewer text={marked.parse(markdown)}/>
            </div>
        </div>
    )
}

export default MarkdownPreviewer;