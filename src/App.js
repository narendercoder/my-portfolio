import "./App.scss";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Skills from "./Pages/Skills/Skills";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Footer from "./Components/Footer/Footer";
import { useEffect, useRef, useState } from "react";
import { MdOutlineDarkMode,MdOutlineLightMode } from 'react-icons/md';
import { AiOutlineBars,AiOutlineClose } from 'react-icons/ai';
import Preloader from "./Components/Preloader/Preloader";


function App() {
  let [theme, setTheme] = useState("light-theme");
  let [sidebar, setSidebar] = useState(false);
  const [loading, setLoading] = useState(false);
  const maincursor = useRef(null);
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  
  const toggleTheme = () => {
     if(theme === "dark-theme"){
      setTheme("light-theme");
     }
     else{
      setTheme("dark-theme");
     }
  }


  const showSidebar = () => {
    if(sidebar === false){
      setSidebar(true);
      document.body.classList.add("sidebar-active");
    }
    else{
      setSidebar(false);
      document.body.classList.remove("sidebar-active");
    }
  }


  useEffect(() => {
   document.addEventListener("mousemove",(event)=>{
     const {clientX, clientY} = event;
     const mouseX = clientX - maincursor.current.clientWidth /2;
     const mouseY = clientY - maincursor.current.clientHeight /2;
     maincursor.current.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`;
    });
  },[]);
  useEffect(()=>{
    let linkHover = [...document.querySelectorAll(".link")];
    const cursor=document.querySelector(".cursor");
    linkHover.map((child)=>{
      child.addEventListener("mouseover",()=>{
        cursor.classList.add("cursor-hover");
      });
      child.addEventListener("mouseout",()=>{
        cursor.classList.remove("cursor-hover");
      });
      return child;
    })
  })
  useEffect(()=>{
    document.body.className = theme;
  },[theme]);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
     setLoading(false)
    },3000)
  },[]);
  return (
    <>
    {
      loading ? <Preloader />
      : <>
    <div className="cursor" ref={maincursor}>
    </div>
    <div className="toggle-btn">
       <div className="toggle-theme">
       <span className="link light icon" ><MdOutlineLightMode onClick={()=>toggleTheme()}/></span>
        <span className="link dark icon" ><MdOutlineDarkMode onClick={()=>toggleTheme()}/></span>
       </div>
       <div className="toggle-header" onClick={()=>showSidebar()}>
       {sidebar ?  <span className="link outline-close icon" ><AiOutlineClose/></span> 
       :<span className="link outline-bars icon" ><AiOutlineBars /></span>}
       </div>
    </div>
    <div className="app">
      <div className="particles">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.1,
                width: 2,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.1,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 2, max: 4 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />}/>
            </Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
    </>
    }
    </>
  );
}

export default App;
