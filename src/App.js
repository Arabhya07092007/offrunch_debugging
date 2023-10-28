// App.js
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Careers from "./Pages/Careers";
import Work from "./Pages/Work";

import Navbar from "./Pages/Navbar";
import "./App.css";
import Footer from "./Pages/Footer";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import Technology from "./Pages/Technology";

const App = () => {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/work" element={<Work />} />

        <Route path="/technologies" element={<Technology />} />

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
