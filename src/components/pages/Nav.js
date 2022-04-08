import React from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Navigation(props) {
  return (
    <div class="row">
      <div className="navigation">
        <Navbar className="justify-content-center" bg="dark" variant="pills">
          <NavLink className="nav-link" to="/about">
          About Me
          </NavLink>

          <NavLink className="nav-link" to="/portfolio">
           Portfolio
          </NavLink>

          <NavLink className="nav-link" to="/contact">
         Contact Me
          </NavLink>
        </Navbar>
      </div>
      <hr/>
    </div>
  
  );
}
