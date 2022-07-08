import React, { Suspense} from 'react'
import {BrowserRouter, Route, Routes } from "react-router-dom";
import { CircularProgress } from '@mui/material';
const Navbar = React.lazy(()=>import("./Components/Navbar/Navbar"));
const Portfolio = React.lazy(()=>import("./Pages/Portfolio/Portfolio"));
const Resume = React.lazy(()=>import("./Pages/Resume/Resume"));
const About = React.lazy(()=>import("./Pages/About/About"));
const Contact = React.lazy(()=>import("./Pages/Contact/Contact"));
const Home = React.lazy(()=>import("./Pages/Home/Home"));
const Footer = React.lazy(()=>import("./Components/Footer/Footer"));
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