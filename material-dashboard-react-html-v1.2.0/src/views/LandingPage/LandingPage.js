import React from "react";
import Navbar from "../Navbar/Navbar";
import { Redirect } from "react-router-dom";

import "../LandingPage/LandingPage.css";

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginConfirm: undefined,
      signupConfirm: undefined
    };
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSignup = () => {
    var data = {
      firstName: this.state.firstName,
      phNum: this.state.phNum,
      email: this.state.email,
      password: this.state.password,
      userName: this.state.userName,
      top5: this.state.top5
    };
    fetch("/api/user/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server.");
        }
        return response.json();
      })

      .catch(err => {
        console.log("Error: " + err);
      });
  };

  handleLogin = () => {
    var data = {
      email: this.state.email,
      password: this.state.password
    };

    fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server.");
        }
        return <Redirect to="/dashboard" />;
      })
      .catch(err => {
        console.log("Error: " + err);
      });
  };

  render() {
    return (
      <div>
        <Navbar />
        <section className="at-login-form">
          {/* Modal Login */}
          <div
            className="modal fade"
            id="at-login"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="signup-or-separator">
                    <span className="h6 signup-or-separator--text">Sign in to view your Dashboard</span>
                    <br />
                  </div>
                  <form>
                    <div className="form-group">
                      <input
                        onChange={this.handleChange}
                        type="email"
                        className="form-control-form "
                        id="exampleInputEmaillog"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        onChange={this.handleChange}
                        type="password"
                        className="form-control-form "
                        id="exampleInputPasswordpas"
                        placeholder="Password"
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" /> Remember me
                          </label>
                        </div>
                      </div>
                      <div className="col-md-4 col-md-offset-2" />
                    </div>
                    <button
                      onClick={this.handleLogin}
                      type="submit"
                      className="btn-lgin"
                    >
                      Login
                    </button>
                  </form>
                </div>
                <div className="modal-footer">
                  <div className="row">
                    <div className="col-md-6">
                      <p className="ta-l">Don't have an account? </p>
                    </div>
                    <div className="col-md-4 col-md-offset-2">
                      <button
                        className="btn-gst"
                        data-toggle="modal"
                        data-dismiss="modal"
                        data-target="#at-signup"
                      >
                        Sign Up{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Modal Signup */}
          <div
            className="modal fade"
            id="at-signup"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="signup-or-separator">
                    <span className="h6 signup-or-separator--text">
                      Create an account here to get started!
                    </span>
                    <hr />
                  </div>
                  <form>
                    <div className="form-group">
                      <input
                        onChange={this.handleChange}
                        type="email"
                        className="form-control-form "
                        id="exampleInputEmaillog"
                        name="email"
                        placeholder="Email(required)"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        onChange={this.handleChange}
                        type="text"
                        className="form-control-form "
                        id="exampleInputNamelog"
                        name="userName"
                        placeholder="Username(required)"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control-form "
                        id="exampleInputPasswordpas"
                        name="password"
                        placeholder="Password(required)"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        onChange={this.handleChange}
                        type="text"
                        className="form-control-form "
                        id="exampleInputNamelog"
                        name="movie1"
                        placeholder="1st Favorite Movie"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        onChange={this.handleChange}
                        type="text"
                        className="form-control-form "
                        id="exampleInputNamelog"
                        name="movie2"
                        placeholder="2nd Favorite Movie"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        onChange={this.handleChange}
                        type="text"
                        className="form-control-form "
                        id="exampleInputNamelog"
                        name="movie3"
                        placeholder="3rd Favorite Movie"
                      />
                    </div>

                    <button
                      onClick={this.handleSignup}
                      type="submit"
                      className="btn-lgin"
                    >
                      Signup
                    </button>
                  </form>
                </div>
                <div className="modal-footer">
                  <div className="row">
                    <div className="col-md-6">
                      <p className="ta-l">Already a Member? </p>
                    </div>
                    <div className="col-md-4 col-md-offset-2">
                      <button
                        className="btn-gst"
                        data-toggle="modal"
                        data-dismiss="modal"
                        data-target="#at-login"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- MODAL SIGNUP FORM FILLING --> */}
          <div
            className="modal fade"
            id="at-signup-filling"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          {/* Page Content */}
          {/* <!-- Jumbotron Header --> */}
          <header className="jumbotron hero-spacer">
            <h1
              className="animated flip"
              // style="text-align: center; font-family: 'Titan One', cursive; font-size: 120px;"
            >
              RIPE TOMATOES
            </h1>
          </header>

          <hr />

          {/* <!-- Title --> */}
          <div className="row">
            <div className="col-lg-12">
              <h3>Latest Features</h3>
            </div>
          </div>
          {/* <!-- Page Features --> */}
          <div className="row text-center">
            <div className="col-md-3 col-sm-6 hero-feature">
              <div className="thumbnail">
                <img src="http://placehold.it/800x500" alt="" />
                <div className="caption" />
              </div>
            </div>
            <hr />

            {/* <!-- Footer --> */}
            <footer>
              <div className="row">
                <div className="col-lg-12">
                  <p>Copyright &copy; Ripe Tomatoes 2018</p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
