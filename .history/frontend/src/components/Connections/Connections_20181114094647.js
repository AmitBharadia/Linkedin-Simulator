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
                    <div
                      className="col-md-4"
                      style={{ "padding-right": "0px" }}
                    >
                      <div class="card">
                        <img
                          class="card-img-top"
                          src="Kriti_Jar.jpg"
                          alt="Card image"
                        />
                        <div class="card-body">
                          <h4 class="card-title">John Doe</h4>
                          <p class="card-text">
                            Some example text some example text. John Doe is an
                            architect and engineer
                          </p>
                          <a href="#" class="btn btn-primary">
                            See Profile
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-4"
                      style={{ "padding-right": "2px" }}
                    >
                      <div class="card">
                        <img
                          class="card-img-top"
                          src="Kriti_Jar.jpg"
                          alt="Card image"
                        />
                        <div class="card-body">
                          <h4 class="card-title">John Doe</h4>
                          <p class="card-text">
                            Some example text some example text. John Doe is an
                            architect and engineer
                          </p>
                          <a href="#" class="btn btn-primary">
                            See Profile
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div class="card">
                        <img
                          class="card-img-top"
                          src="Kriti_Jar.jpg"
                          alt="Card image"
                        />
                        <div class="card-body">
                          <h4 class="card-title">John Doe</h4>
                          <p class="card-text">
                            Some example text some example text. John Doe is an
                            architect and engineer
                          </p>
                          <a href="#" class="btn btn-primary">
                            See Profile
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
