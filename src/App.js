import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AboutUs from  "./components/AboutUs";
import Donations from "./components/Donations";


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="About" element={<AboutUs/>}></Route>
        <Route path="donations" element= {<Donations/>}></Route>
       </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
