import React from 'react'
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Resume from "./Pages/Resume/Resume";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Error from './Pages/Error/Error';

function Content() {
  return (
    <BrowserRouter>
    <div className="container">
      <Routes>
        <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} >
          <Route index element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          </Route>
        </Route>
        <Route path="*" element={<Error />}/>
      </Routes>
    </div>
    <Footer />
  </BrowserRouter>
  )
}

export default Content