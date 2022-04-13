import React from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Navigation(props) {
  return (
    <div class="row">
      <div className="navigation">
        <Navbar className="justify-content-center" variant="pills">
          <NavLink className="nav-link" to="/about">
          ABOUT ME
          </NavLink>

          <NavLink className="nav-link" to="/portfolio">
           PROJECTS
          </NavLink>

          <NavLink className="nav-link" to="/contact">
         LINKS
          </NavLink>
        </Navbar>
      </div>
      <hr/>
    </div>
  
  );
}
