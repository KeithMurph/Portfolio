import React from "react";
import { Route, HashRouter, Redirect } from "react-router-dom";
import Navigation from "./Nav";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact.js";





export default function Header() {
    return (
        <div className="head-navBar">
            <HashRouter>
                <header>
                    <Navigation/>
                </header>

                <header>
                    <div className="navbox">
                      
                    <Route exact path="/" render={() => <Redirect to="/about" />} />
                        <Route path="/about" component={About} />
                        <Route path="/portfolio" component={Portfolio} />
                        <Route path="/contact" component={Contact} />
                        
                        </div>
                  
                </header>
            </HashRouter>

        </div>
    )
}