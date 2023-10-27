import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Support from "./components/Support";
import Mainheader from "./components/Mainheader";



function App() {
  return (
  <div>

    <nav>
      <ul className="flex justify-between font-bold w-64 ">
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/support"><li>Support</li></NavLink>
        <NavLink to="/signup"><li>Signup</li></NavLink>
        <NavLink to="/login"><li>Login</li></NavLink>
      </ul>
    </nav>



    <Routes>
      <Route path="/" element={<Mainheader />} >
        <Route index element={<Home />}/>
        <Route path="/login" element={<Login />}/>

        <Route path="/signup" element={<Signup />}/>
        <Route path="/support" element={<Support />}/>
        <Route path="*" element={<div>Something went wrong</div>} />
      </Route>
    </Routes>
  </div>
  );
}

export default App;
