import React from "react";
import "./Nav.css";

const Nav = props => (
    <div className = "container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">Ripe Tomatoes</a>
                {/* <a className="navbar-brand">Click an image to begin!</a> */}
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </nav>
     </div>       
);

export default Nav;
