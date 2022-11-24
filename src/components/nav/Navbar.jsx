import React, { useState } from "react";
import { Brand, Nav, Menu, MenuLink, Hamburger } from "./Navbar.style";
import {GiHamburgerMenu} from "react-icons/gi";


const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <Nav justify='space-between' wrap='wrap'>
      <Brand to='/'>
        <i>{"<Boss/>"}</i>
        <span>Recipes</span>
      </Brand>

      <Hamburger onClick={() => setOpen(!open)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu open={open} onClick={() => setOpen(!open)}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/register">Register</MenuLink>
        <MenuLink to="/logout" onClick={()=>sessionStorage.clear()} >Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
