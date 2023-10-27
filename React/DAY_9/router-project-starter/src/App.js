import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {

  const [isLoggedin, setIsLoggedIn] = useState(false);

  return (
  <div className="w-screen h-screen bg-richblack-900 flex flex-col">
    <Navbar isLoggedin={isLoggedin} setIsLoggedIn={setIsLoggedIn}/>

    <Routes>
      <Route path="/" element={<Home isLoggedin={isLoggedin} />}></Route>
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
      <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>
      <Route path="/dashboard" element={
      <PrivateRoute isLoggedin={isLoggedin}>
        <Dashboard />
      </PrivateRoute>
      
      
      }></Route>
    </Routes>
  </div>
  );
}

export default App;
