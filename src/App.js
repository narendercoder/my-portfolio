import "./App.scss";
import React, {  Suspense, useEffect, useState } from "react";
import { CircularProgress } from '@mui/material';
import Preloader from "./Components/Preloader/Preloader";
const Cursor = React.lazy(()=>import("./Components/Cursor/Cursor"));
const Content = React.lazy(()=>import("./Content"));
const Particle = React.lazy(()=>import("./Components/Particle/Particle"));

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
    {
      loading ? <Preloader />
      : <>
      <Suspense fallback={<div><CircularProgress/></div>} >
     <Cursor />
    <div className="app">
      <Particle/>
      <Content />
    </div>
    </Suspense>
    </>
    }
    </>
  );
}

export default App;
