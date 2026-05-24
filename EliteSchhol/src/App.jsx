import { Routes, Route } from "react-router-dom";
import NavBar from "./Pages/navbar.jsx";

import Home from "./Pages/homePage.jsx";
import Contact from "./Pages/contactPage.jsx";
import Gallery from "./Pages/galleryPage.jsx";
import Admissions from "./Pages/admissionPage.jsx";
import About from "./Pages/aboutPage.jsx";
import LastSection from"./Pages/lastSection.jsx"
import './script.js'

export default function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <LastSection />
    </>
  );
}