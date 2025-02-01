import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import UserProtectWrapper from "./pages/UserProtectWrapper";

const App = () => {

  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={
              <UserProtectWrapper>
                <Dashboard />
              </UserProtectWrapper>
              
            }/>
        </Routes>
  );
};

export default App;
