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
                {/* <div className="row" style={myStyles.invitations}>
                  <h3 style={myStyles.h3pending}>No pending invitations</h3>
                </div> */}

                <div className="row" style={myStyles.invitations}>
                  <div
                    className="row"
                    style={{
                      width: "100%",
                      height: "50px",
                      margin: "0px",
                      borderBottom: "solid 1px lightgray"
                    }}
                  >
                    <h3
                      style={{
                        width: "100%",
                        height: "50px",
                        margin: "0px",
                        marginLeft: "20px",
                        marginTop: "20px",
                        fontSize: "1.8rem",
                        color: "rgba(0,0,0,.9)",
                        fontWeight: "400"
                      }}
                    >
                      Invitations
                    </h3>
                  </div>
                  <div
                    className="row"
                    style={{ height: "150px", marginTop: "10px" }}
                  >
                    <div className="col-md-2">
                      <img
                        src="Kriti_Jar.jpg"
                        style={{
                          width: "100%",
                          height: "70%",

                          marginLeft: "30px",
                          border: "solid 1px lightgray"
                        }}
                      />
                    </div>
                    <div
                      className="col-md-5"
                      style={{
                        marginLeft: "20px"
                      }}
                    >
                      <span>
                        <h2>Kriti Jar</h2>
                      </span>
                      <br />

                      <span
                        style={{
                          textAlign: "center",
                          lineHeight: "1.6rem!important",
                          maxHeight: "3.2rem",
                          fontSize: "1.2rem",
                          fontWeight: "400",

                          color: "rgba(0,0,0,.6)"
                        }}
                      >
                        Actively seeking summer internship
                        opportunities\Graduate computer science
                      </span>
                    </div>
                    <div className="col-md-4" style={{ marginTop: "50px" }}>
                      <a
                        href="#"
                        class="btn btn-primary"
                        style={{
                          textAlign: "center",
                          backgroundColor: "white",
                          color: "#006097",
                          boxShadow: "inset 0 0 0 1px #006097",
                          padding: "10 16px",

                          font: "400 13.3333px Arial"
                        }}
                      >
                        Accept
                      </a>
                      <a
                        href="#"
                        class="btn btn-primary"
                        style={{
                          textAlign: "center",
                          backgroundColor: "white",
                          color: "#006097",
                          boxShadow: "inset 0 0 0 1px #006097",
                          padding: "10 16px",
                          marginLeft: "40px",
                          font: "400 13.3333px Arial"
                        }}
                      >
                        Ignore
                      </a>
                    </div>
                  </div>
                  <div
                    className="row"
                    style={{ height: "150px", marginTop: "10px" }}
                  >
                    <div className="col-md-2">
                      <img
                        src="Kriti_Jar.jpg"
                        style={{
                          width: "100%",
                          height: "70%",

                          marginLeft: "30px",
                          border: "solid 1px lightgray"
                        }}
                      />
                    </div>
                    <div
                      className="col-md-5"
                      style={{
                        marginLeft: "20px"
                      }}
                    >
                      <span>
                        <h2>Kriti Jar</h2>
                      </span>
                      <br />

                      <span
                        style={{
                          textAlign: "center",
                          lineHeight: "1.6rem!important",
                          maxHeight: "3.2rem",
                          fontSize: "1.2rem",
                          fontWeight: "400",

                          color: "rgba(0,0,0,.6)"
                        }}
                      >
                        Actively seeking summer internship
                        opportunities\Graduate computer science
                      </span>
                    </div>
                    <div className="col-md-4" style={{ marginTop: "50px" }}>
                      <a
                        href="#"
                        class="btn btn-primary"
                        style={{
                          textAlign: "center",
                          backgroundColor: "white",
                          color: "#006097",
                          boxShadow: "inset 0 0 0 1px #006097",
                          padding: "10 16px",

                          font: "400 13.3333px Arial"
                        }}
                      >
                        Accept
                      </a>
                      <a
                        href="#"
                        class="btn btn-primary"
                        style={{
                          textAlign: "center",
                          backgroundColor: "white",
                          color: "#006097",
                          boxShadow: "inset 0 0 0 1px #006097",
                          padding: "10 16px",
                          marginLeft: "40px",
                          font: "400 13.3333px Arial"
                        }}
                      >
                        Ignore
                      </a>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <div className="row" style={myStyles.youMayKnow}>
                  <div
                    className="row"
                    style={{
                      width: "100%",
                      height: "50px",
                      margin: "0px",
                      borderBottom: "solid 1px lightgray"
                    }}
                  >
                    <h3
                      style={{
                        width: "100%",
                        height: "50px",
                        margin: "0px",
                        marginLeft: "20px",
                        marginTop: "20px",
                        fontSize: "1.8rem",
                        color: "rgba(0,0,0,.9)",
                        fontWeight: "400"
                      }}
                    >
                      Recommended for you
                    </h3>
                  </div>
                  <div className="row">
                    <div className="col-md-4" style={{ maxHeight: "320px" }}>
                      <div class="card" style={{ height: "320px" }}>
                        <img
                          class="card-img-top"
                          src="Kriti_Jar.jpg"
                          alt="Card image"
                          style={{
                            width: "50%",
                            height: "50%",
                            marginTop: "20px",
                            marginLeft: "50px"
                          }}
                        />
                        <div class="card-body">
                          <h4
                            class="card-title"
                            style={{
                              textAlign: "center"
                            }}
                          >
                            John Doe
                          </h4>
                          <p
                            class="card-text"
                            style={{
                              textAlign: "center",
                              lineHeight: "1.6rem!important",
                              maxHeight: "3.2rem",
                              fontSize: "1.2rem",
                              fontWeight: "400",
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
                              textAlign: "center",
                              backgroundColor: "white",
                              color: "#006097",
                              boxShadow: "inset 0 0 0 1px #006097",
                              padding: "10 16px",
                              marginLeft: "50px",
                              font: "400 13.3333px Arial"
                            }}
                          >
                            Connect
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4" style={{ maxHeight: "320px" }}>
                      <div class="card" style={{ height: "320px" }}>
                        <img
                          class="card-img-top"
                          src="Kriti_Jar.jpg"
                          alt="Card image"
                          style={{
                            width: "50%",
                            height: "50%",
                            marginTop: "20px",
                            marginLeft: "50px"
                          }}
                        />
                        <div class="card-body">
                          <h4
                            class="card-title"
                            style={{
                              textAlign: "center"
                            }}
                          >
                            John Doe
                          </h4>
                          <p
                            class="card-text"
                            style={{
                              textAlign: "center",
                              lineHeight: "1.6rem!important",
                              maxHeight: "3.2rem",
                              fontSize: "1.2rem",
                              fontWeight: "400",
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
                              textAlign: "center",
                              backgroundColor: "white",
                              color: "#006097",
                              boxShadow: "inset 0 0 0 1px #006097",
                              padding: "10 16px",
                              marginLeft: "50px",
                              font: "400 13.3333px Arial"
                            }}
                          >
                            Connect
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4" style={{ maxHeight: "320px" }}>
                      <div class="card" style={{ height: "320px" }}>
                        <img
                          class="card-img-top"
                          src="Kriti_Jar.jpg"
                          alt="Card image"
                          style={{
                            width: "50%",
                            height: "50%",
                            marginTop: "20px",
                            marginLeft: "50px"
                          }}
                        />
                        <div class="card-body">
                          <h4
                            class="card-title"
                            style={{
                              textAlign: "center"
                            }}
                          >
                            John Doe
                          </h4>
                          <p
                            class="card-text"
                            style={{
                              textAlign: "center",
                              lineHeight: "1.6rem!important",
                              maxHeight: "3.2rem",
                              fontSize: "1.2rem",
                              fontWeight: "400",
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
                              textAlign: "center",
                              backgroundColor: "white",
                              color: "#006097",
                              boxShadow: "inset 0 0 0 1px #006097",
                              padding: "10 16px",
                              marginLeft: "50px",
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
