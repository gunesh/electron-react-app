import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";
import Connect from "./Connect";
import Logo from "../assets/logo.png";
import "./menu.css";

const Menu = () => {
  const path = window.location.pathname;
  const location = useLocation();
  const { pathname } = location;
  
  return (
    <>
      <header className="call-us">
        <Connect />
      </header>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <img src={Logo} alt={`Alpine Realtors`} className="logo" />
        </Link>
        <Nav>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link
                to="/"
                className={`nav-link px-2 link-secondary ${
                  pathname === "/" || pathname === "" ? "active" : ""
                }`}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`nav-link px-2 link-secondary ${
                  pathname === "/about" ? "active" : ""
                }`}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`nav-link px-2 link-secondary ${
                  pathname === "/projects" ? "active" : ""
                }`}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`nav-link px-2 link-secondary ${
                  pathname === "/contact" ? "active" : ""
                }`}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </Nav>
      </header>
    </>
  );
};

export default Menu;
