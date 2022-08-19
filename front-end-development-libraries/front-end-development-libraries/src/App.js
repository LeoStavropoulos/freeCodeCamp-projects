import {Route, Routes} from "react-router-dom";
import QuoteMachineProject from "./pages/random-quote-machine/QuoteMachineProject";
import Home from "./pages/Home";
import MarkdownPreviewer from "./pages/simple-react-markdown-previewer/MarkdownPreviewer";
import DrumMachine from "./pages/build-a-drum-machine/DrumMachine";
import Calculator from "./pages/build-a-javascript-calculator/Calculator";

function App() {
  return (
      <>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="quote" element={<QuoteMachineProject/>} />
            <Route path="markdown" element={<MarkdownPreviewer/>} />
            <Route path="drum" element={<DrumMachine/>} />
            <Route path="calculator" element={<Calculator/>} />
          </Routes>
      </>
  );
}

export default App;
