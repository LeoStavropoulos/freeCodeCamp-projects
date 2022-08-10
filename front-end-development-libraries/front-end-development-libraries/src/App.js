import {Route, Routes} from "react-router-dom";
import QuoteMachineProject from "./pages/random-quote-machine/QuoteMachineProject";
import Home from "./pages/Home";

function App() {
  return (
      <>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="quote" element={<QuoteMachineProject/>} />
          </Routes>
      </>
  );
}

export default App;
