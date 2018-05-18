import React from "react";
import "../Navbar/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="#">
            Ripe Tomatoes
          </a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <form className="form-inline">
            <ul className="nav navbar-nav navbar-right bdr">
              <li>
                <a href="#" data-toggle="modal" data-target="#at-login">
                  Sign in
                </a>
              </li>

              <li>
                <a href="#" data-toggle="modal" data-target="#at-signup">
                  Sign Up
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
