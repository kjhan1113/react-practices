import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import P1 from "./pages/TextReader";
import P2 from "./pages/P2";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="sidebar">
          <h2>Sidebar</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/textreader">Text Reader</Link>
            </li>
            <li>
              <Link to="/p2">P2</Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/textreader" element={<P1 />} />
            <Route path="/p2" element={<P2 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
