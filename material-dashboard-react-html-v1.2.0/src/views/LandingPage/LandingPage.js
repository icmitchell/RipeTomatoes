import React from "react";
import axios from "axios"
import Navbar from "../Navbar/Navbar";
import { Redirect } from "react-router-dom";
import searchTermApi from "../../utils/searchTermApi.js"
import "../LandingPage/LandingPage.css";

import YoutubeReact from '../LandingPage/YouTubeAPI.js'
export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginConfirm: false,
      signupConfirm: false
    };
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSignup = () => {
    var data = {
      email: this.state.email,
      userame: this.state.userName,
      password: this.state.Password,
      movie1: this.state.movie1,
      movie2: this.state.movie2,
      movie3: this.state.movie3
    };
    axios.post("/api/user/add", data)
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server.");
        }
        else{
          console.log(response)
          this.setState({"signupConfirm": true})
        }
      })
      .catch(err => {
        console.log("Error: " + err);
      });
  };

  handleLogin = () => {
    var data = {
      username: this.state.username,
      password: this.state.password
    };

    // searchTermApi.login(data)

    axios.post("/login", data)
    .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server.");
        }
        else{
          console.log(response.body)
          this.setState({"loginConfirm": true})
        }
      })
      .catch(err => {
        console.log("Error: " + err);
      });
  };

  render() {
    if (this.state.loginConfirm) 
        return (<Redirect to={ { pathname: '/dashboard'} } />)
    if (this.state.signupConfirm) 
        return (<Redirect to={ { pathname: '/'} } />)
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
                        type="text"
                        name="username"
                        className="form-control-form "
                        id="exampleInputEmaillog"
                        placeholder="Username"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        onChange={this.handleChange}
                        type="password"
                        name="Password"
                        className="form-control-form "
                        id="exampleInputPasswordlog"
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
                      type="button"
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
                        id="exampleInputEmailcreate"
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
                        id="exampleInputPasswordcreate"
                        name="password"
                        placeholder="Password(required)"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        onChange={this.handleChange}
                        type="text"
                        className="form-control-form "
                        id="exampleInputmovie1log"
                        name="movie1"
                        placeholder="1st Favorite Movie"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        onChange={this.handleChange}
                        type="text"
                        className="form-control-form "
                        id="exampleInputmovie2log"
                        name="movie2"
                        placeholder="2nd Favorite Movie"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        onChange={this.handleChange}
                        type="text"
                        className="form-control-form "
                        id="exampleInputmovie3log"
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
          <YoutubeReact className="video"
                ref={(player)=>{ this.player = player }}
                videoid={this.state.videoid}
                listType={this.state.listType} 
                list={this.state.list}
                height={this.state.height}
                width={this.state.width}
                autoplay={this.state.autoplay}
                onEnded={this.onEnded} 
                onPaused={this.onPaused} 
                onPlayed={this.onPlayed} 
                onReady={this.onReady} 
            >
           <header className="jumbotron hero-spacer">
            <h1 className="animated flip" >
              RIPE TOMATOES
            </h1>
           </header>
          </YoutubeReact>

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
    );
  }
}
