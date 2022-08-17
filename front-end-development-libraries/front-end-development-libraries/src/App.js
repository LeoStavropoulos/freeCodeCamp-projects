import {Route, Routes} from "react-router-dom";
import QuoteMachineProject from "./pages/random-quote-machine/QuoteMachineProject";
import Home from "./pages/Home";
import MarkdownPreviewer from "./pages/simple-react-markdown-previewer/MarkdownPreviewer";
import DrumMachine from "./pages/build-a-drum-machine/DrumMachine";

function App() {
  return (
      <>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="quote" element={<QuoteMachineProject/>} />
            <Route path="markdown" element={<MarkdownPreviewer/>} />
            <Route path="drum" element={<DrumMachine/>} />
          </Routes>
      </>
  );
}

export default App;
