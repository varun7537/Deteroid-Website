import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Career from "./pages/Career";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"         element={<Home />} />
        {/* <Route path="/about"    element={<AboutUs />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path="/career"   element={<Career />} />
        <Route path="/contact"  element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}