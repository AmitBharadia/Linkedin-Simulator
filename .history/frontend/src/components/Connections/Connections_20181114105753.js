import React, { Component } from "react";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import Navbar from "../Common/Navbar";
import { Field, reduxForm, change } from "redux-form";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../action/signin";
import Columns from "react-bootstrap-columns";

import myStyles from "./Connections.css.js";
import { register } from "../../serviceWorker";

class Connections extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
          <br />
          <br />
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div style={myStyles.divCorner}>
                  <span style={myStyles.span1}>
                    <h1>158</h1>
                  </span>
                  <span style={myStyles.span2}>
                    <h3>Your connections</h3>
                  </span>
                  <span style={myStyles.span3}>
                    <h3>See all</h3>
                  </span>
                </div>
                <div />
                <div style={myStyles.divCorner1}>
                  <span style={myStyles.span4}>
                    <h5> Your contact import is ready </h5>
                  </span>
                  <span style={myStyles.span5}>
                    <h5>Connect with your contacts and </h5>
                  </span>
                  <span style={myStyles.span5}>
                    <h5>never loose touch</h5>
                  </span>
                  <button style={myStyles.continue}>
                    <h3>Continue</h3>
                  </button>
                  <span style={myStyles.span6}>
                    <h4>More options</h4>
                  </span>
                </div>
                <div />
              </div>

              <div className="col-lg-7" style={myStyles.div_md7}>
                <div className="row" style={myStyles.invitations}>
                  <h3 style={myStyles.h3pending}>No pending invitations</h3>
                </div>
                <br />
                <br />
                <div className="row" style={myStyles.youMayKnow}>
                  <div className="row">
                    <span>People You May Know</span>
                  </div>
                  <div className="row">
                    <div className="col-md-4" style={{ "max-height": "320px" }}>
                      <div class="card" style={{ height: "320px" }}>
                        <img
                          class="card-img-top"
                          src="Kriti_Jar.jpg"
                          alt="Card image"
                          style={{
                            width: "50%",
                            height: "50%",
                            "margin-top": "20px",
                            "margin-left": "50px"
                          }}
                        />
                        <div class="card-body">
                          <h4
                            class="card-title"
                            style={{
                              "text-align": "center"
                            }}
                          >
                            John Doe
                          </h4>
                          <p
                            class="card-text"
                            style={{
                              "text-align": "center",
                              "line-height": "1.6rem!important",
                              "max-height": "3.2rem",
                              "font-size": "1.2rem",
                              "font-weight": "400",
                              color: "rgba(0,0,0,.6)"
                            }}
                          >
                            Some example text some example text. John Doe is an
                            architect and engineer
                          </p>
                          <br />
                          <br />
                          <a
                            href="#"
                            class="btn btn-primary"
                            style={{
                              "text-align": "center",
                              "background-color": "rgba(152,216,244,.25)",
                              color: "#006097",
                              "box-shadow": "inset 0 0 0 1px #006097",
                              padding: "10 16px",
                              "margin-left": "50px",
                              font: "400 13.3333px Arial"
                            }}
                          >
                            Connect
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4" style={{ "max-height": "320px" }}>
                      <div class="card" style={{ height: "320px" }}>
                        <img
                          class="card-img-top"
                          src="Kriti_Jar.jpg"
                          alt="Card image"
                          style={{
                            width: "50%",
                            height: "50%",
                            "margin-top": "20px",
                            "margin-left": "50px"
                          }}
                        />
                        <div class="card-body">
                          <h4
                            class="card-title"
                            style={{
                              "text-align": "center"
                            }}
                          >
                            John Doe
                          </h4>
                          <p
                            class="card-text"
                            style={{
                              "text-align": "center",
                              "line-height": "1.6rem!important",
                              "max-height": "3.2rem",
                              "font-size": "1.2rem",
                              "font-weight": "400",
                              color: "rgba(0,0,0,.6)"
                            }}
                          >
                            Some example text some example text. John Doe is an
                            architect and engineer
                          </p>
                          <br />
                          <br />
                          <a
                            href="#"
                            class="btn btn-primary"
                            style={{
                              "text-align": "center",
                              "background-color": "rgba(152,216,244,.25)",
                              color: "#006097",
                              "box-shadow": "inset 0 0 0 1px #006097",
                              padding: "10 16px",
                              "margin-left": "50px",
                              font: "400 13.3333px Arial"
                            }}
                          >
                            Connect
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4" style={{ "max-height": "320px" }}>
                      <div class="card" style={{ height: "320px" }}>
                        <img
                          class="card-img-top"
                          src="Kriti_Jar.jpg"
                          alt="Card image"
                          style={{
                            width: "50%",
                            height: "50%",
                            "margin-top": "20px",
                            "margin-left": "50px"
                          }}
                        />
                        <div class="card-body">
                          <h4
                            class="card-title"
                            style={{
                              "text-align": "center"
                            }}
                          >
                            John Doe
                          </h4>
                          <p
                            class="card-text"
                            style={{
                              "text-align": "center",
                              "line-height": "1.6rem!important",
                              "max-height": "3.2rem",
                              "font-size": "1.2rem",
                              "font-weight": "400",
                              color: "rgba(0,0,0,.6)"
                            }}
                          >
                            Some example text some example text. John Doe is an
                            architect and engineer
                          </p>
                          <br />
                          <br />
                          <a
                            href="#"
                            class="btn btn-primary"
                            style={{
                              "text-align": "center",
                              "background-color": "rgba(152,216,244,.25)",
                              color: "#006097",
                              "box-shadow": "inset 0 0 0 1px #006097",
                              padding: "10 16px",
                              "margin-left": "50px",
                              font: "400 13.3333px Arial"
                            }}
                          >
                            Connect
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  //export default Signin;
}
export default Connections;
