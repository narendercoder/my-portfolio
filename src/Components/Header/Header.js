import React, { useEffect } from 'react';
import "./Header.scss"
import { NavLink } from 'react-router-dom';
import { ImUser } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosBrush,IoMdListBox } from "react-icons/io";

function Header() {
  useEffect(()=>{
    let active = [...document.querySelectorAll(".nav-link")];
    active.map((child)=>{
      
      return child;
    })
  })
  return (
    <div className='header'>
    <div className='menu-btn'>
    <NavLink className="nav-link link"  to="/" >
    <img src="logo.jpg" alt="" />
    </NavLink>
    </div>
      <div className='top-menu'>
         <ul>
          <li>
          <NavLink className="nav-link link"  to="/" >
          <span className="icon">
          <ImUser/>
          </span>
          <span className='link'>About</span>
          </NavLink>
          </li>
          <li>
          <NavLink className="nav-link link" to="/resume">
          <span className="icon">
          <IoMdListBox/>
          </span>
          <span className='link'>Resume</span>
          </NavLink>
          </li>
          <li>
          <NavLink className="nav-link link" to="/portfolio">
          <span className="icon">
          <IoIosBrush/>
          </span>
          <span className='link'>works</span>
          </NavLink>
          </li>
          <li>
          <NavLink className="nav-link link" to="/contact">
          <span className="icon">
            <FaPhoneAlt/>
          </span>
          <span className='link'>contact</span>
          </NavLink>
          </li>
         </ul>
      </div>
    </div>
  )
}

export default Header