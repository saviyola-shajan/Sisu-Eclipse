import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery"; // (assuming you have this Gallery page)
import Contact from "./Pages/Contact";
import Artist from "./Pages/Artist";

function App() {
  return (
    <Router>
      <div className="font-georgia">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/featured-artist" element={<Artist />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
