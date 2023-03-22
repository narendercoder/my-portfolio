import React, {  useEffect, useState } from "react";
import Preloader from "./Components/Preloader/Preloader";
import { GlobalStyle } from "./GlobalStyle/Globalstyle";
import Cursor from "./Components/Cursor";
import Content from "./Content";
import Particle from "./Components/Particle";


function App() {

  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
     setLoading(false)
    },3000)
  },[]);



  return (
    <>
    <GlobalStyle/>
    {
      loading ? <Preloader />
      : <>
     <Cursor />
    <div className="app">
      <Particle/>
      <Content />
    </div>

    </>
    }

    </>
  );
}

export default App;
