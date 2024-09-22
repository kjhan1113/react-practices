import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import P1 from "./components/P1";
import P2 from "./components/P2";

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
              <Link to="/p1">P1</Link>
            </li>
            <li>
              <Link to="/p2">P2</Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/p1" element={<P1 />} />
            <Route path="/p2" element={<P2 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
