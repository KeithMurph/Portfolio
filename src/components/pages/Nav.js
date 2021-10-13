import React from "react";
import { Navbar } from "react-bootstrap";
import {NavLink} from "react-router-dom";

export default function Navigation(props) {
  return (
    <div class="row">
    <div className="navigation" >
      <Navbar expand="md" bg="info" sticky="top" >
  
        <ul className=" navbar-nav ml-auto navitem-indent">
          <li className="nav-item">
            <NavLink className="nav-link" to="/about"  >
              <div className="nav-font text-dark">About Me</div>
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" to="/portfolio">
              <div className="nav-font text-dark">Portfolio</div>
            </NavLink>
          </li>
          <li className="nav-item " >
            <NavLink className="nav-link" to="/contact">
              <div className="nav-font text-dark">Contact Me</div>
            </NavLink>
          </li>
        
        </ul>
      </Navbar>
    </div>
    </div>
  );
}