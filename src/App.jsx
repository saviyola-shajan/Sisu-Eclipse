import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery"; // (assuming you have this Gallery page)

function App() {
  return (
    <Router>
      <div className="font-georgia">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
