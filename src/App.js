import logo from "./logo.svg";
import "./App.css";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./components/Home";
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Signup /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
