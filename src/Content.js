import React, { Suspense} from 'react'
import {BrowserRouter, Route, Routes } from "react-router-dom";
import { CircularProgress } from '@mui/material';
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Resume from "./Pages/Resume/Resume";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
function Content() {
  return (
    <BrowserRouter>
    <Suspense fallback={<div><CircularProgress/></div>} >
    <div className="container">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />}/>
        </Route>
      </Routes>
    </div>
    <Footer />
    </Suspense>
  </BrowserRouter>
  )
}

export default Content