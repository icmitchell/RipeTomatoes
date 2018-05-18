import React from "react";
import Navbar from "../Navbar/Navbar";
import "../LandingPage/LandingPage.css";

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar />
        <section className="at-login-form">
          {/* Modal Login */}
          <div
            className="modal fade"
            id="at-login"
            tabindex="-1"
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
                    <span className="h6 signup-or-separator--text">or</span>
                    <br />
                  </div>
                  <form>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control-form "
                        id="exampleInputEmaillog"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
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
                    <button type="submit" className="btn-lgin">
                      Login
                    </button>
                  </form>
                </div>
                <div className="modal-footer">
                  <div className="row">
                    <div className="col-md-6">
                      <p className="ta-l">Don't have an account ? </p>
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
            tabindex="-1"
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
                        type="text"
                        className="form-control-form "
                        id="exampleInputNamelog"
                        placeholder="First Name(optional)"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control-form "
                        id="exampleInputEmaillog"
                        placeholder="Email(required)"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control-form "
                        id="exampleInputNamelog"
                        placeholder="Username(required)"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control-form "
                        id="exampleInputPasswordpas"
                        placeholder="Password(required)"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control-form "
                        id="exampleInputNamelog"
                        placeholder="Phone Number(optional)"
                      />
                    </div>
                    <button type="submit" className="btn-lgin">
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
            tabindex="-1"
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
