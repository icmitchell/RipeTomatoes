import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar" />
            <span class="icon-bar" />
            <span class="icon-bar" />
          </button>
          <a class="navbar-brand" href="#">
            Ripe Tomatoes
          </a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <form class="form-inline">
            <ul class="nav navbar-nav navbar-right bdr">
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
