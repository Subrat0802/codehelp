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
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  return (
  <div>
    <Navbar isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn} />

    <Routes>
      <Route path="/" element={<Home isUserLoggedIn={isUserLoggedIn}/> }/>
      <Route path="/login" element={<Login setIsUserLoggedIn={setIsUserLoggedIn}/>}/>
      <Route path="/signup" element={<Signup setIsUserLoggedIn={setIsUserLoggedIn}/>}/>
      <Route path="/dashboard" element={
          <PrivateRoute isUserLoggedIn={isUserLoggedIn}>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  </div>
  );
}

export default App;
