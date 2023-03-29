import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import ErrorPage from "./Pages/ErrorPage";
import AOS from "aos";
import "aos/dist/aos.css";


AOS.init({
  once: true,
  duration: 1000,
  offset: -200,
});

const Contact = React.lazy(() => import("./Pages/Contact"));

const Content = () =>{
  

  return (

     <BrowserRouter>
      <div className="container">
        <Suspense
          fallback={
            <>
              <div
                className="spinner-border"
                style={{ width: "3rem", height: "3rem" }}
                role="status"
              ></div>
            </>
          }
        >
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="/" element={<Home />}>
                <Route index element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
              </Route>
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </BrowserRouter>

  );
}

export default Content;
