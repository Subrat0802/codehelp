import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import "./App.css";
import PrivateRooute from "./components/PrivateRooute";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRooute isLogin={isLogin}>
              <Dashboard isLogin={isLogin} />
            </PrivateRooute>
          }
        />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/signup" element={<Signup setIsLogin={setIsLogin} />} />
      </Routes>
    </div>
  );
};

export default App;
