import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  const [togglebar, setTogglebar] = useState(false);
  const toggleMenu = () => {
    if (togglebar === true) {
      setTogglebar(false);
    } else {
      setTogglebar(true);
    }
  };
  const activeclass = ({ isActive, isPending }) => {
    return {
      color: isActive ? "darkred" : "",
      backgroundColor: isActive ? "lightgoldenrodyellow" : "",
      fontWeight: isActive ? "500" : "",
    };
  };
  
  return (
    <>
      <div className="Navbar_portfolio">
        <div className="logo_portfolio">Nayan Portfolio</div>
        <ul className="navitems_portfolio">
          <li>
            <NavLink style={activeclass} to="portfolio">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={activeclass} to="about">
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink style={activeclass} to="contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink style={activeclass} to="blog">
              Blog
            </NavLink>
          </li>
        </ul>
        <div className="togglemenu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {togglebar ? (
        <ul className="navitems_portfolio_mobile">
          <NavLink
            style={activeclass}
            to="portfolio"
          >
            Home
          </NavLink>
          <NavLink
            style={activeclass}
            to="about"
          >
            About Me
          </NavLink>
          <NavLink
            style={activeclass}
            to="contact"
          >
            Contact
          </NavLink>
          <NavLink
            style={activeclass}
            to="blog"
          >
            Blog
          </NavLink>
        </ul>
      ) : null}
      <Outlet />
    </>
  );
};

export default Navbar;
