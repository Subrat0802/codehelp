import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./components.js/Home";
import MainHead from "./components.js/MainHead";
import Support from "./components.js/Support";
import About from "./components.js/About";
import Contact from "./components.js/Contact";
import NotFound from "./components.js/NotFound";

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <NavLink to={"/"}>
            <li>Home</li>
          </NavLink>
          <NavLink to={"/support"}>
            <li>Support</li>
          </NavLink>
          <NavLink to={"/contact"}>
            <li>Contact</li>
          </NavLink>
          <NavLink to={"/about"}>
            <li>About</li>
          </NavLink>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHead />}>
          <Route index element={<Home />}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
