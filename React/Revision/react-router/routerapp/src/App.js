import { Link, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Support from "./components/Support";
import About from "./components/About";
import Labs from "./components/Labs";
import Notfound from "./components/Notfound";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route path="/home" element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
