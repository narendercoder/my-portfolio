import React, { useEffect, useState } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { ImUser } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { IoIosBrush, IoMdListBox } from "react-icons/io";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

function Header() {
  let [sidebar, setSidebar] = useState(true);
  let [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
  };

  const showSidebar = () => {
    if (sidebar === false) {
      setSidebar(true);
      document.body.classList.add("sidebar-active");
    } else {
      setSidebar(false);
      document.body.classList.remove("sidebar-active");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(()=>{
    showSidebar();
    // eslint-disable-next-line
  },[]);
  
  return (
    <div className="header">
      <div className="menu-btn">
        <NavLink className="nav-link link" to="/">
          <img
            src="logo.jpg"
            width="244"
            height="258"
            alt="logo"
            loading="lazy"
          />
        </NavLink>
        <div className="toggle-btn">
          <div className="toggle-theme">
            <span className="link light icon">
              <MdOutlineLightMode onClick={() => toggleTheme()} />
            </span>
            <span className="link dark icon">
              <MdOutlineDarkMode onClick={() => toggleTheme()} />
            </span>
          </div>
          <div className="toggle-header" onClick={() => showSidebar()}>
            {sidebar ? (
              <span className="link outline-close icon">
                <AiOutlineClose />
              </span>
            ) : (
              <span className="link outline-bars icon">
                <AiOutlineBars />
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="top-menu">
        <ul>
          <li>
            <NavLink className="nav-link link" to="/">
              <span className="icon">
                <ImUser />
              </span>
              <span className="link">About</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link link" to="/resume">
              <span className="icon">
                <IoMdListBox />
              </span>
              <span className="link">Resume</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link link" to="/portfolio">
              <span className="icon">
                <IoIosBrush />
              </span>
              <span className="link">works</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link link" to="/contact">
              <span className="icon">
                <FaPhoneAlt />
              </span>
              <span className="link">contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
