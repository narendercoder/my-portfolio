import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
const Navbar = () => {
  return (
    <>
  <Header />
  <Outlet />
  </>
  )
}

export default Navbar