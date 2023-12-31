import React from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Vehicle from "./pages/Vehicle";
import Autonomy from "./pages/Autonomy";
import Careers from "./pages/Careers";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicle" element={<Vehicle />} />
        <Route path="/autonomy" element={<Autonomy />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
