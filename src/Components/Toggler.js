import React, { useEffect, useState } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useGlobalContext } from '../Context';


const Toggler = () => {
    const {isdarkMode, toggleTheme} = useGlobalContext();
    
    let [toggle, setToggle] = useState(isdarkMode);
  
    const toggleMode = () => {
      toggleTheme();
      setToggle(!isdarkMode);
    };
  
    useEffect(() => {
        toggle ? document.body.className = "dark-theme" : document.body.className = "light-theme" ;
    }, [toggle]);
  
  return (
    
    <>
        {
            toggle ? <span className="link light icon">
                <MdOutlineLightMode onClick={() => toggleMode()} />
              </span>
             :  <span className="link dark icon">
                <MdOutlineDarkMode onClick={() => toggleMode()} />
              </span>
        }
    </>
  )
}

export default Toggler