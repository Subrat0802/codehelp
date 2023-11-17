import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [isUserLogin, setIsUserLogin] = useState(false)
  return (
  <div>
    <Navbar isUserLogin={isUserLogin} setIsUserLogin={setIsUserLogin}/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login setIsUserLogin={setIsUserLogin} />}/>
      <Route path="/signin" element={<Signin setIsUserLogin={setIsUserLogin}/>}/>
      <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
  </div>
  );
}

export default App;
