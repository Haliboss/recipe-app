import React from "react";
import { Link } from "react-router-dom";
import { Brand, Nav } from "./Navbar.style";

const Navbar = () => {
  return (
    <Nav justify='space-between' wrap='wrap'>
      <Brand to='/'>
        <i>{"<Boss/>"}</i>
        <span>Recipes</span>
      </Brand>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/register">Register</Link>
        <Link to="/logout">Logout</Link>
      </div>
    </Nav>
  );
};

export default Navbar;
