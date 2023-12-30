import React from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Vehicle from "./pages/Vehicle";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={Vehicle} />
      </Routes>
    </>
  );
}

export default App;

/**
 *
 */
